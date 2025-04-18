// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LMS",
  tagline: "Hướng dẫn sử dụng phần mềm học lý thuyết trực tiếp",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hieunv2011.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docusaurus/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hieunv2011", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          includeCurrentVersion: true,
          lastVersion: "1.0.0",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  // plugins: [
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     {
  //       hashed: true,
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Toan Phuong LMS",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "HDSD",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "X",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'B5DQUXZ049',
        apiKey: '9f038fbe58419a0fd607abb91dc90259',
        indexName: 'hieunv2011io',
        contextualSearch: true,
        translations: {
          button: {
            buttonText: 'Tìm kiếm',
            buttonAriaLabel: 'Tìm kiếm',
          },
          modal: {
            searchBox: {
              resetButtonTitle: 'Xóa tìm kiếm',
              resetButtonAriaLabel: 'Xóa tìm kiếm',
              cancelButtonText: 'Thoát',
              cancelButtonAriaLabel: 'Thoát',
            },
            startScreen: {
              recentSearchesTitle: 'Tìm kiếm gần đây',
              noRecentSearchesText: 'Chưa có tìm kiếm nào',
              saveRecentSearchButtonTitle: 'Lưu tìm kiếm',
              removeRecentSearchButtonTitle: 'Xóa tìm kiếm',
              favoriteSearchesTitle: 'Yêu thích',
              removeFavoriteSearchButtonTitle: 'Xóa khỏi yêu thích',
            },
            errorScreen: {
              titleText: 'Không thể tìm kiếm',
              helpText: 'Vui lòng kiểm tra kết nối Internet của bạn',
            },
            footer: {
              selectText: 'Chọn',
              navigateText: 'Di chuyển',
              closeText: 'Đóng',
              searchByText: 'Tìm kiếm bởi',
            },
            noResultsScreen: {
              noResultsText: 'Không có kết quả nào',
              suggestedQueryText: 'Bạn có thể thử tìm:',
              reportMissingResultsText: 'Bạn nghĩ kết quả này nên xuất hiện?',
              reportMissingResultsLinkText: 'Gửi phản hồi',
            },
            resultsScreen: {
              noResultsText: 'Không tìm thấy kết quả nào',
              loadingText: 'Đang tải kết quả...',
              searchResultsForText: 'Kết quả tìm kiếm cho',
              showAllResultsText: 'Xem tất cả kết quả',
            },
          },
        },
      },
      
      
  
    }),
};

export default config;
