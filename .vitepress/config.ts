import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Studio Link",
    description: "Documentation",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting started', link: '/standalone' }
        ],

        sidebar: [
            {
                text: 'Getting started',
                collapsed: false,
                items: [
                    { text: 'Standalone', link: '/standalone' },
                    { text: 'Plug-in', link: '/plug-in' },
                ]
            },
        ],

        socialLinks: [
            { icon: 'mastodon', link: 'https://social.studio.link' },
            { icon: 'github', link: 'https://github.com/studio-link' },
            { icon: 'twitter', link: 'https://twitter.com/studio_link_de' },
        ],

        search: {
            provider: 'local'
        }
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en'
        },
        de: {
            label: 'German',
            lang: 'de', // optional, will be added  as `lang` attribute on `html` tag
            link: '/de/' // default /fr/ -- shows on navbar translations menu, can be external
        }
    }
})
