import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type { PluginOptions } from "@easyops-cn/docusaurus-search-local";
import { themes as prismThemes } from "prism-react-renderer";

const ORG = "MohammadAObed";
const REPO = "docs-typescript-common";
const SITE_URL = `https://${ORG}.github.io`;
const GITHUB_URL = `https://github.com/${ORG}/config`;

const config: Config = {
  title: REPO,
  tagline: "Reusable typescript utilities for any JS/TS project",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: SITE_URL,
  baseUrl: "/",
  organizationName: ORG,
  projectName: REPO,
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: REPO,
      logo: {
        alt: `${REPO} logo`,
        src: "img/logo.png",
      },
      items: [
        { type: "docSidebar", sidebarId: "tutorialSidebar", position: "left", label: "Docs" },
        { href: GITHUB_URL, label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "docs",
          items: [{ label: "Getting Started", to: "/docs/get-started" }],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "GitHub", href: GITHUB_URL },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OPMO, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      } satisfies PluginOptions,
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../typescript-common/src"],
        entryPointStrategy: "expand",
        tsconfig: "../typescript-common/tsconfig.json",
        plugin: ["typedoc-plugin-markdown"],
        out: "docs/app",
        cleanOutputDir: false,
        excludeExternals: true,
        excludePrivate: true,
        excludeProtected: true,
        readme: "none",
      },
    ],
  ],
};

export default config;
