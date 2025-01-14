(function() {
    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        .fb-icon {
            display: none;
            position: fixed;
            cursor: pointer;
            background: #1677ff;
            color: white;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            text-align: center;
            line-height: 36px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 9;  /* 提高z-index确保显示在最上层 */
            font-size: 18px;
            user-select: none;  /* 防止图标被选中 */
            pointer-events: auto;  /* 确保可以点击 */
        }
        .fb-icon:hover { 
            transform: scale(1.1);
            background: #4096ff;
            box-shadow: 0 6px 16px rgba(22,119,255,0.3);
        }
        .fb-window {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.95);
            background: white;
            border-radius: 16px;
            padding: 32px;
            width: 480px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.12);
            z-index: 1001;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(12px);
        }
        .fb-window.active {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        .fb-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
        }
        .fb-close {
            position: absolute;
            right: 16px;
            top: 16px;
            cursor: pointer;
            color: #999;
            font-size: 18px;
        }
        .fb-title { margin-bottom: 20px; color: #1f1f1f; font-size: 18px; }
        .fb-group { margin-bottom: 16px; }
        .fb-label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-size: 14px;
        }
        .fb-input, .fb-textarea {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid rgba(22,119,255,0.1);
            border-radius: 8px;
            font-size: 14px;
            transition: all 0.3s;
            background: rgba(22,119,255,0.03);
        }
        .fb-input:focus, .fb-textarea:focus {
            outline: none;
            border-color: #1677ff;
            box-shadow: 0 0 0 2px rgba(22,119,255,0.2);
        }
        .fb-button {
            width: 100%;
            background: linear-gradient(45deg, #1677ff, #4096ff);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s;
            margin-top: 8px;
        }
        .fb-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(22,119,255,0.3);
        }
        .fb-message {
            display: none;
            padding: 12px;
            border-radius: 8px;
            background: #f6ffed;
            border: 1px solid #b7eb8f;
            color: #52c41a;
            margin-top: 16px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);

    // 创建DOM元素
    const template = `
        <div class="fb-overlay" id="fb-overlay"></div>
        <div class="fb-icon" id="fb-icon">📝</div>
        <div class="fb-window" id="fb-window">
            <span class="fb-close" id="fb-close">×</span>
            <h3 class="fb-title">If you have any questions, please let me know</h3>
            <form id="fb-form">
            <div class="fb-group">
                    <label class="fb-label" for="fb-content">Feedback: </label>
                    <textarea class="fb-textarea" id="fb-content" rows="4" required></textarea>
                </div>
                <div class="fb-group">
                    <label class="fb-label" for="fb-email">Email: </label>
                    <input class="fb-input" type="email" id="fb-email" required>
                </div>                
                <button class="fb-button" type="submit">Submit</button>
            </form>
            <p class="fb-message" id="fb-message">Submission successful! Thank you for your feedback.</p>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', template);

    // 获取DOM元素
    const elements = {
        icon: document.getElementById('fb-icon'),
        window: document.getElementById('fb-window'),
        overlay: document.getElementById('fb-overlay'),
        close: document.getElementById('fb-close'),
        form: document.getElementById('fb-form'),
        message: document.getElementById('fb-message'),
        email: document.getElementById('fb-email'),
        content: document.getElementById('fb-content')
    };

    // 关闭窗口函数
    function closeWindow() {
        elements.window.classList.remove('active');
        setTimeout(() => {
            elements.window.style.display = 'none';
            elements.overlay.style.display = 'none';
        }, 300);
    }

    // 事件监听
    let selectedText = '';
    let isSelecting = false;

    // 计算图标位置的辅助函数
    function calculateIconPosition(event) {
        // 获取可视区域大小
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // 获取鼠标在可视区域内的位置
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // 获取页面滚动距离
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        
        // 计算图标位置，确保在可视区域内
        let iconX = mouseX + 20; // 鼠标右侧20px
        let iconY = mouseY - 10; // 鼠标上方10px
        
        // 防止图标超出右边界
        if (iconX + 40 > viewportWidth) {
            iconX = mouseX - 40; // 改为显示在鼠标左侧
        }
        
        // 防止图标超出底部边界
        if (iconY + 40 > viewportHeight) {
            iconY = mouseY - 40; // 改为显示在鼠标上方更高位置
        }
        
        // 确保不会显示在可视区域外
        iconX = Math.max(10, Math.min(iconX, viewportWidth - 40));
        iconY = Math.max(10, Math.min(iconY, viewportHeight - 40));
        
        return {
            x: iconX,
            y: iconY
        };
    }

    // 监听选择开始
    document.addEventListener('mousedown', function(event) {
        if (!elements.window.contains(event.target) && 
            !elements.icon.contains(event.target)) {
            isSelecting = true;
            elements.icon.style.display = 'none';
        }
    });

    // 监听选择结束
    document.addEventListener('mouseup', function(event) {
        console.log('Mouse up event triggered'); // 调试日志
        
        if (!isSelecting) return;
        isSelecting = false;

        setTimeout(() => {
            const selection = window.getSelection();
            const text = selection.toString().trim();
            
            console.log('Selected text:', text); // 调试日志
            
            if (text.length > 0) {
                selectedText = text;
                const icon = elements.icon;
                
                // 使用新的位置计算函数
                const pos = calculateIconPosition(event);
                
                // 设置图标样式
                icon.style.position = 'fixed'; // 使用fixed定位
                icon.style.left = `${pos.x}px`;
                icon.style.top = `${pos.y}px`;
                icon.style.transform = 'scale(0)';
                icon.style.display = 'block';
                icon.style.opacity = '1';
                
                // 添加显示动画
                requestAnimationFrame(() => {
                    icon.style.transform = 'scale(1)';
                });
                
                console.log('Icon displayed at:', pos.x, pos.y); // 调试日志
            }
        }, 0);
    });

    // 阻止图标被选中
    elements.icon.addEventListener('mousedown', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    // 修改打开窗口的动画
    elements.icon.addEventListener('click', function() {
        elements.overlay.style.display = 'block';
        elements.window.style.display = 'block';
        requestAnimationFrame(() => {
            elements.window.classList.add('active');
        });
    });

    elements.form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 确保在提交时重新获取选中文本
        const currentSelection = window.getSelection().toString().trim();
        console.log('Current selection:', currentSelection); // 调试日志
        const textToSend = selectedText || currentSelection;
        console.log('Text to send:', textToSend); // 调试日志
        const currentURL = window.location.href;  // 获取当前页面完整URL
        console.log('Current URL:', currentURL); // 调试日志

        

        const data = {
            
    "msg_type": "interactive",
    "card": {
        "schema": "2.0",
        "config": {
            "update_multi": true,
            "locales": [
                "en_us",
                "ja_jp"
            ],
            "streaming_mode": true,
            "streaming_config": {
                "print_step": {
                    "default": 1
                },
                "print_frequency_ms": {
                    "default": 70
                },
                "print_strategy": "fast"
            },
            "style": {
                "text_size": {
                    "normal_v2": {
                        "default": "normal",
                        "pc": "normal",
                        "mobile": "heading"
                    }
                }
            }
        },
        "card_link": {
            "url": ""
        },
        "body": {
            "direction": "vertical",
            "padding": "12px 12px 12px 12px",
            "elements": [
                {
                    "tag": "div",
                    "text": {
                        "tag": "lark_md",                        
                        "content": "<at id=all></at>反馈内容：",                        
                    },                    
                },
                {
                    "tag": "column_set",
                    "horizontal_spacing": "8px",
                    "horizontal_align": "left",
                    "columns": [
                        {
                            "tag": "column",
                            "width": "auto",
                            "elements": [
                                {
                                    "tag": "div",
                                    "text": {
                                        "tag": "plain_text",
                                        "content": "反馈邮箱：\n",                                        
                                        "text_size": "heading",
                                        "text_align": "left",
                                        "text_color": "default"
                                    },
                                    "icon": {
                                        "tag": "standard_icon",
                                        "token": "mail-setting_outlined",
                                        "color": "grey"
                                    },
                                    "margin": "0px 0px 0px 0px"
                                }
                            ],
                            "padding": "0px 0px 0px 0px",
                            "direction": "vertical",
                            "horizontal_spacing": "8px",
                            "vertical_spacing": "8px",
                            "horizontal_align": "left",
                            "vertical_align": "top",
                            "margin": "0px 0px 0px 0px"
                        },
                        {
                            "tag": "column",
                            "width": "weighted",
                            "elements": [
                                {
                                    "tag": "div",
                                    "text": {
                                        "tag": "plain_text",
                                        "content": elements.email.value,                                        
                                        "text_size": "normal_v2",
                                        "text_align": "left",
                                        "text_color": "default"
                                    },
                                    "margin": "0px 0px 0px 0px"
                                }
                            ],
                            "padding": "0px 0px 0px 0px",
                            "vertical_spacing": "8px",
                            "horizontal_align": "left",
                            "vertical_align": "top",
                            "margin": "0px 0px 0px 0px",
                            "weight": 1
                        }
                    ],
                    "margin": "0px 0px 0px 0px"
                },
                {
                    "tag": "column_set",
                    "horizontal_spacing": "8px",
                    "horizontal_align": "left",
                    "columns": [
                        {
                            "tag": "column",
                            "width": "auto",
                            "elements": [
                                {
                                    "tag": "div",
                                    "text": {
                                        "tag": "plain_text",
                                        "content": "文档内容：\n",                                        
                                        "text_size": "normal_v2",
                                        "text_align": "left",
                                        "text_color": "default"
                                    },
                                    "icon": {
                                        "tag": "standard_icon",
                                        "token": "file-link-docx-shortcut_outlined",
                                        "color": "grey"
                                    },
                                    "margin": "0px 0px 0px 0px"
                                }
                            ],
                            "padding": "0px 0px 0px 0px",
                            "direction": "vertical",
                            "horizontal_spacing": "8px",
                            "vertical_spacing": "8px",
                            "horizontal_align": "left",
                            "vertical_align": "top",
                            "margin": "0px 0px 0px 0px"
                        },
                        {
                            "tag": "column",
                            "width": "weighted",
                            "elements": [
                                {
                                    "tag": "div",
                                    "text": {
                                        "tag": "plain_text",
                                        "content": textToSend,
                                        "text_size": "normal_v2",
                                        "text_align": "left",
                                        "text_color": "default"
                                    },
                                    "margin": "0px 0px 0px 0px"
                                }
                            ],
                            "padding": "0px 0px 0px 0px",
                            "vertical_spacing": "8px",
                            "horizontal_align": "left",
                            "vertical_align": "top",
                            "margin": "0px 0px 0px 0px",
                            "weight": 1
                        }
                    ],
                    "margin": "0px 0px 0px 0px"
                },
                {
                    "tag": "column_set",
                    "horizontal_spacing": "8px",
                    "horizontal_align": "left",
                    "columns": [
                        {
                            "tag": "column",
                            "width": "auto",
                            "elements": [
                                {
                                    "tag": "div",
                                    "text": {
                                        "tag": "plain_text",
                                        "content": "反馈问题：\n",                                        
                                        "text_size": "normal_v2",
                                        "text_align": "left",
                                        "text_color": "default"
                                    },
                                    "icon": {
                                        "tag": "standard_icon",
                                        "token": "doc-comment_outlined",
                                        "color": "grey"
                                    },
                                    "margin": "0px 0px 0px 0px"
                                }
                            ],
                            "padding": "0px 0px 0px 0px",
                            "direction": "vertical",
                            "horizontal_spacing": "8px",
                            "vertical_spacing": "8px",
                            "horizontal_align": "left",
                            "vertical_align": "top",
                            "margin": "0px 0px 0px 0px"
                        },
                        {
                            "tag": "column",
                            "width": "weighted",
                            "elements": [
                                {
                                    "tag": "div",
                                    "text": {
                                        "tag": "plain_text",
                                        "content": elements.content.value,                                        
                                        "text_size": "normal_v2",
                                        "text_align": "left",
                                        "text_color": "default"
                                    },
                                    "margin": "0px 0px 0px 0px"
                                }
                            ],
                            "padding": "0px 0px 0px 0px",
                            "vertical_spacing": "8px",
                            "horizontal_align": "left",
                            "vertical_align": "top",
                            "margin": "0px 0px 0px 0px",
                            "weight": 1
                        }
                    ],
                    "margin": "0px 0px 0px 0px"
                },
                {
                    "tag": "column_set",
                    "horizontal_spacing": "8px",
                    "horizontal_align": "left",
                    "columns": [
                        {
                            "tag": "column",
                            "width": "auto",
                            "elements": [
                                {
                                    "tag": "button",
                                    "text": {
                                        "tag": "plain_text",
                                        "content": "立即查看",                                        
                                    },
                                    "type": "primary_filled",
                                    "width": "default",
                                    "size": "medium",
                                    "icon": {
                                        "tag": "standard_icon",
                                        "token": "window-new_outlined"
                                    },
                                    "behaviors": [
                                        {
                                            "type": "open_url",
                                            "default_url": currentURL,
                                            "pc_url": currentURL,
                                            "ios_url": currentURL,
                                            "android_url": currentURL
                                        }
                                    ],
                                    "margin": "0px 0px 0px 0px"
                                }
                            ],
                            "padding": "0px 0px 0px 0px",
                            "direction": "vertical",
                            "horizontal_spacing": "8px",
                            "vertical_spacing": "8px",
                            "horizontal_align": "left",
                            "vertical_align": "top",
                            "margin": "0px 0px 0px 0px"
                        },
                        {
                            "tag": "column",
                            "width": "weighted",
                            "elements": [
                                {
                                    "tag": "div",
                                    "text": {
                                        "tag": "plain_text",
                                        "content": "请在反馈处理完成后在此消息上反馈 DONE",
                                        "text_size": "notation",
                                        "text_align": "left",
                                        "text_color": "grey"
                                    },
                                    "margin": "12px 0px 0px 0px"
                                }
                            ],
                            "padding": "0px 0px 0px 0px",
                            "direction": "vertical",
                            "horizontal_spacing": "8px",
                            "vertical_spacing": "8px",
                            "horizontal_align": "left",
                            "vertical_align": "top",
                            "margin": "0px 0px 0px 0px",
                            "weight": 1
                        }
                    ],
                    "margin": "0px 0px 0px 0px"
                }
            ]
        },
        "header": {
            "title": {
                "tag": "plain_text",
                "content": "您有一个新的文档反馈，请及时查看处理",                
            },
            "subtitle": {
                "tag": "plain_text",
                "content": ""
            },
            "template": "red",
            "padding": "12px 12px 12px 12px"
        }
    }

        };

        fetch('https://open.feishu.cn/open-apis/bot/v2/hook/e959e8cf-237d-4246-b7f7-894e66fccd3e', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                elements.message.style.display = 'block';
                setTimeout(() => {
                    closeWindow();
                    elements.message.style.display = 'none';
                    elements.email.value = '';
                    elements.content.value = '';
                }, 3000);
            } else {
                throw new Error('提交失败');
            }
        })
        .catch(error => {
            console.error('提交出错:', error);
            alert('提交失败，请稍后再试');
        });
    });

    elements.close.addEventListener('click', closeWindow);
    elements.overlay.addEventListener('click', closeWindow);
})();
