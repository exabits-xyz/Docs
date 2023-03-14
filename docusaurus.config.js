// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
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
                theme: {
                    customCss: require.resolve("./src/scss/globals.scss"),
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
                    src: "img/logo.png",
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
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} exaBITS All Rights Reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            trailingSlash: false,
        }),
};

module.exports = config;
