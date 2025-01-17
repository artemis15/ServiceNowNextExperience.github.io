// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ServiceNow Next Experience',
  tagline: 'Workshops & Lab guides',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://servicenownextexperience.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'servicenownextexperience', // Usually your GitHub org/user name.
  projectName: 'servicenownextexperience.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    "docusaurus-plugin-sass",
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },

    [
      "@docusaurus/plugin-content-docs",
      {
        path: "labs/example-lab",
        id: "example-lab",
        routeBasePath: "labs/example-lab",
        sidebarPath: require.resolve("./labs/example-lab/sidebar.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
        breadcrumbs: false,
      },
    ],
    
      // INDIVIDUAL LABS DOCS PLUGINS

      // LAB2050-K24
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "labs/LAB2050-K24-Intro-to-Workspaces",
        id: "LAB2050K24",
        routeBasePath: "labs/LAB2050-K24-Intro-to-Workspaces",
        sidebarPath: require.resolve("./labs/LAB2050-K24-Intro-to-Workspaces/sidebar.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
        breadcrumbs: false,
      },
    ],
    
      // CCL1319-K24
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "labs/CCL1319-K24-Theming-Lab",
        id: "CCL1319",
        routeBasePath: "labs/CCL1319-K24-Theming-Lab",
        sidebarPath: require.resolve("./labs/CCL1319-K24-Theming-Lab/sidebar.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
        breadcrumbs: false,
      },
    ],
    // CCL1199-K24
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "labs/CCL1199-K24-Killer-SAP",
        id: "CCL1199",
        routeBasePath: "labs/CCL1199-K24-Killer-SAP",
        sidebarPath: require.resolve("./labs/CCL1199-K24-Killer-SAP/sidebar.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
        breadcrumbs: false,
      },
    ],
  // CCL1200-K24
  [
    "@docusaurus/plugin-content-docs",
    {
      path: "labs/CCL1200-K24-Adv-Workspaces",
      id: "CCL1200",
      routeBasePath: "labs/CCL1200-K24-Adv-Workspaces",
      sidebarPath: require.resolve("./labs/CCL1200-K24-Adv-Workspaces/sidebar.js"),
      showLastUpdateAuthor: false,
      showLastUpdateTime: false,
      breadcrumbs: false,
    },
  ],

  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,/*{
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: './src/css/custom.scss',
        },
        /*
        gtag: {
          trackingID: "G-P6HQJZPT0C", //GETNEWTAG
        },
        */
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-thumbnail.png',
      navbar: {
        title: '',
        logo: {
          alt: 'ServiceNow',
          src: "img/servicenow-logo.png",
          srcDark: "img/servicenow-logo_dark.png",
        },
        items: [
          /*
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          
          {to: '/blog', label: 'Blog', position: 'left'},*/
         {
            label: 'Build Along Month',
            to: '/buildAlongMonth',
            position: 'left',
          },
          {
            label: 'Developer',
            href: 'https://developer.servicenow.com/',
            position: 'left',
            target: '_blank',
          },
          {
            label: 'Documentation',
            href: 'https://docs.servicenow.com/',
            position: 'left',
            target: '_blank',
          },
          {
            label: 'Training',
            href: 'https://nowlearning.servicenow.com/',
            position: 'left',
            target: '_blank',
          },
          {
            href: "https://github.com/ServiceNowNextExperience/ServiceNowNextExperience.github.io",            
            position: 'right',
            target: "_blank",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Blog",
                href: "https://developer.servicenow.com/blog.do",
              },
              {
                label: "Dev Community",
                href: "https://www.servicenow.com/community/developer/ct-p/Developer",
              },
              {
                label: "Learning Paths",
                href: "https://developer.servicenow.com/dev.do#!/learn",
              },
              {
                label: "FREE ServiceNow Instance",
                href: "https://developer.servicenow.com/",
              },
              {
                label: "ServiceNow Community",
                href: "https://www.servicenow.com/community/",
              },
              {
                label: "Training",
                href: "https://nowlearning.servicenow.com/",
              },
            ],
          },
          {
            title: "Reference",
            items: [
              {
                label: "API Reference",
                href: "https://developer.servicenow.com/dev.do#!/reference",
              },
              {
                label: "Developer Glossary",
                href: "https://developer.servicenow.com/dev.do#!/guides/vancouver/now-platform/glossary/developer-glossary",
              },
              {
                label: "Example Lab Guide",
                href: "/labs/example-lab/overview",
              },
              {
                label: "Now Create",
                href: "https://nowlearning.servicenow.com/nowcreate",
              },
              {
                label: "Product Documentation",
                href: "https://docs.servicenow.com/",
              },
            ],
          },
          {
            title: "About ServiceNow",
            items: [
              {
                label: "Customer Success Center",
                href: "https://www.servicenow.com/success.html",
              },
              {
                label: "Knowledge Conference",
                href: "https://knowledge.servicenow.com/",
              },
              {
                label: "LowCodeWorkshops.com",
                href: "http://lowcodeworkshops.com/",
              },
              {
                label: "ServiceNow.com",
                href: "https://www.servicenow.com/",
              },
              {
                label: "ServiceNow Blogs",
                href: "https://www.servicenow.com/blogs.html",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/servicenow",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/servicenow/",
                icon: 'instagram',
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/servicenow",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/servicenow",
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@servicenow",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/user/servicenowinc",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ServiceNow`,
      },
    }),
};

export default config;
