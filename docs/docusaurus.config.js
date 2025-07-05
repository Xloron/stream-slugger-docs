// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stream Slugger Docs',
  tagline: 'Boost your stream with interactive Twitch overlays.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.streamslugger.com',
  baseUrl: '/',

  organizationName: 'xloron', // jouw GitHub gebruikersnaam
  projectName: 'stream-slugger-docs',       // naam van je repo

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/xloron/stream-slugger-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/xloron/stream-slugger-docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Stream Slugger Docs',
      logo: {
        alt: 'Stream Slugger Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        
        {
          href: 'https://github.com/xloron/stream-slugger-docs',
          label: 'GitHub',
          position: 'right',
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
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/philberex',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/bAnxY2a',
            },
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@philberex',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stream Slugger.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
