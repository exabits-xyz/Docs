// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

const config = {
    title: "exaBITS Documentation",
    tagline:
        "Decentralized Computing Network for AI and Computationally Intensive Applications",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://docs.exabits.xyz",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "exaBITS", // Usually your GitHub org/user name.
    projectName: "exabits-docs", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    path: "docs",
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    breadcrumbs: true,
                },
                gtag: {
                    trackingID: "G-GT15VCVP0Q",
                    anonymizeIP: true,
                },
                theme: {
                    customCss: require.resolve("./src/scss/globals.scss"),
                },
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                },
            }),
        ],
    ],
    plugins: ["docusaurus-plugin-sass"],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "exaBITS Documentation",
                logo: {
                    alt: "exaBITS Documentation",
                    src: "img/logo.webp",
                    href: "/",
                },
                items: [
                    {
                        href: "https://github.com/exabits-xyz/Docs",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            prism: {
                theme: darkCodeTheme,
            },
            algolia: {
                appId: "8L5VM30PSY",
                apiKey: "e45875860302d62fea9639a67ebe0b71",
                indexName: "exabits",
            },
            colorMode: {
                disableSwitch: true,
            },
            trailingSlash: false,
        }),
};

module.exports = config;
