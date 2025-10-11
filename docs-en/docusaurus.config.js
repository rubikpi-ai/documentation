// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RUBIK Pi Documentation",
  tagline: "the first Pi built on Qualcomm AI platforms for developers.",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://www.thundercomm.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/rubik-pi-3/en/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Thundercomm", // Usually your GitHub org/user name.
  projectName: "RUBIK Pi Documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    {
      src: "https://hm.baidu.com/hm.js?cd51725dd2087a36c61e7b2d17d7817b",
      async: true,
    },
    {
      src: "/rubik-pi-3/en/js/feedback.js",
      async: true,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          exclude: ['**/drafts/**'],
          

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/rubikpi-ai/documentation/',
          // bugUrl: 'https://github.com/rubikpi-ai/documentation/issues',
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      // Sidebar behavior configuration
      // hideable: 在桌面端右上角显示一个折叠按钮，让用户可以临时隐藏侧边栏
      // autoCollapseCategories: 展开一个分类时自动折叠同级其它分类
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        // title: 'Documentation',
        logo: {
          alt: "RUBIK Pi",
          src: "img/rubik-pi-logo.png",
          srcDark: "img/rubik-pi-logo-white.png",
          href:"https://www.rubikpi.ai/",
        },
        items: [          
          
          {
            href: "https://community.rubikpi.ai/",
            label: "Community",
            position: "right",
          },
          {
            href: "https://rubikpi.ai/faq/",
            label: "FAQ",
            position: "right",
          },
          {
            href: "https://notebooklm.google.com/notebook/4262a68b-30e4-4774-bc60-112890047275",
            label: "NotebookLM",
            position: "right",
          },
          {
            href: "https://github.com/rubikpi-ai",
            label: "GitHub",
            position: "right",
          },
          {
            type: "html",
            position: "right",
            value:
              '<a href="https://www.thundercomm.com/rubik-pi-3/cn/" target="_blank"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" class="iconLanguage_nlXk"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>中文</a>',
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'X',
          //       href: 'https://x.com/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright 2016 - ${new Date().getFullYear()}. Thundercomm America Corporation. All rights reserved. 渝ICP备16006224号-1 渝公网安备50011202504292`,
      },
      prism: {
        theme: prismThemes.github,
        // theme: prismThemes.dracula, //黑色主题
        darkTheme: prismThemes.dracula,
      },
      
    }),

  plugins: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
      language: ["en", "zh"],
      // 搜索屏蔽旧版
      ignoreFiles: [
        /^.*\/1\.0\.0\/.*$/,     
        /^.*\/1\.0\.0-a\/.*$/,    
        /^.*\/1\.0\.0-d\/.*$/,    
        /^.*\/1\.1\.0\/.*$/, 
        /^.*\/1\.1\.1\/.*$/,    

      ], // 使用正则表达式
      },
    ],
    ],
    themes: ["@docusaurus/theme-mermaid"],
        // In order for Mermaid code blocks in Markdown to work,
        // you also need to enable the Remark plugin with this option
        markdown: {
          mermaid: true,
        },
};

export default config;

// In your `docusaurus.config.js`:
