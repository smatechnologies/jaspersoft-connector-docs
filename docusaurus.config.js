/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SMA Technologies Help',
  tagline: 'Jaspersoft Connector',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/opcon/connectors/jaspersoft/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  organizationName: 'smatechnologies',
  projectName: 'jaspersoft-connector-docs',

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/logo.svg',
        href: 'https://help.smatechnologies.com',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  }),

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/jaspersoft-connector-docs/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-7XYMFXX81Y',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexBlog: false,
      },
    ],
  ],
};

module.exports = config;
