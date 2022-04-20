const path = require('path');

module.exports = {
  title: 'Kidsloop',
  tagline: 'Deliver content, collect data, and assess children in real time',
  url: 'https://kidsloop.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/icon.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Kidsloop Logo',
        src: 'img/kidsloop.svg',
      },
      items: [
        {
          to: 'api-reference',
          label: 'API Reference',
          position: 'left'
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Main Site',
          items: [
            {
              label: 'Kidsloop',
              href: 'https://kidsloop.net/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kidsloop.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/KL-Engineering/documentation-portal-demo/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    apiSpec: "https://swagger-ui.kidsloop.net/config/api.swagger.json"
  },
  plugins: [path.resolve(__dirname, 'redoc-plugin')],
};
