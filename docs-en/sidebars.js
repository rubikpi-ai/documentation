// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "doc",
      id: "about-rubikpi", // 文档 ID
      label: "About RUBIK Pi 3", // 侧边栏标签
    },
    {
      type: "doc",
      id: "notice", // 文档 ID
      label: "Notice for Use", // 侧边栏标签
    },
    {
      type: "category",
      label: "RUBIK Pi 3 User Manual",
      collapsed: false,
      // link: {type: 'doc', id: 'rubik-pi-3-user-manual/1.0.0-a/get-started'},
      items: [
        {
          type: "category",
          label: "Linux System",
          // 默认展开
          
          // link: {type: 'doc', id: 'rubik-pi-3-user-manual/1.0.0-a/get-started'},
          link: {
            type: "generated-index",
            title: "Linux System",
            description:
              "Update date: 2025.06.06 , Version: 1.1.2 | Based on Qualcomm Linux 1.3",
            slug: "/rubik-pi-3/en/docs/1.1.2",
            keywords: ["guides"],
            image: "/img/docusaurus.png",
          },
          items: [
            "rubik-pi-3-user-manual/1.1.2/get-started",
            "rubik-pi-3-user-manual/1.1.2/peripherals-and-interfaces",
            "rubik-pi-3-user-manual/1.1.2/qualcomm-ai-hub",
            "rubik-pi-3-user-manual/1.1.2/ai-developer-workflow",
            "rubik-pi-3-user-manual/1.1.2/qualcomm-im-sdk",
            "rubik-pi-3-user-manual/1.1.2/lvgl-user-guide",
            "rubik-pi-3-user-manual/1.1.2/qt5-user-guide",
            "rubik-pi-3-user-manual/1.1.2/tools-and-libraries-porting-guide",
            "rubik-pi-3-user-manual/1.1.2/ros-user-guide",
            "rubik-pi-3-user-manual/1.1.2/yocto-project-user-guide",
            "rubik-pi-3-user-manual/1.1.2/user-guide-to-rubikpi-config",
            "rubik-pi-3-user-manual/1.1.2/gitHub-operation-guide",
            "rubik-pi-3-user-manual/1.1.2/revision-history",
          ],
        },
         {
          type: "category",
          label: "Android System",
          // 默认展开
          
          // link: {type: 'doc', id: 'rubik-pi-3-user-manual/1.0.0-a/get-started'},
          link: {
            type: "generated-index",
            title: "Android System",
            description:
              "Update date: 2025.06.06 , Version: 1.0.1 | Based on Android 13",
            slug: "/rubik-pi-3/en/docs/1.0.1-a",
            keywords: ["guides"],
            image: "/img/docusaurus.png",
          },
          items: [
            "rubik-pi-3-user-manual/1.0.1-a/get-started",
            "rubik-pi-3-user-manual/1.0.1-a/peripherals-and-interfaces",
            "rubik-pi-3-user-manual/1.0.1-a/qualcomm-ai-hub",
            "rubik-pi-3-user-manual/1.0.1-a/revision-history",
            
          ],
        },
        {
          type: "category",
          label: "Debian System",
          // 默认展开
          
          // link: {type: 'doc', id: 'rubik-pi-3-user-manual/1.0.0-a/get-started'},
          link: {
            type: "generated-index",
            title: "Debian System",
            description:
              "Update date: 2025.06.06 , Version: 1.0.1 | Based on Debian 13",
            slug: "/rubik-pi-3/en/docs/1.0.1-d",
            keywords: ["guides"],
            image: "/img/docusaurus.png",
          },
          items: [
            "rubik-pi-3-user-manual/1.0.1-d/get-started",
            "rubik-pi-3-user-manual/1.0.1-d/peripherals-and-interfaces",
            "rubik-pi-3-user-manual/1.0.1-d/ai-processor-and-sdk-testing-methods",
            "rubik-pi-3-user-manual/1.0.1-d/user-guide-to-rubikpi-config",
            "rubik-pi-3-user-manual/1.0.1-d/github-operation-guide",
            "rubik-pi-3-user-manual/1.0.1-d/revision-history",
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "hardware-resources", // 文档 ID
      label: "Hardware Resources", // 侧边栏标签
    },
    {
      type: "doc",
      id: "image", // 文档 ID
      label: "System Image", // 侧边栏标签
    },
  ],
};

export default sidebars;
