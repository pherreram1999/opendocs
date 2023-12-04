import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Opendocs",
    base: '/opendocs',
    outDir: './docs',
    description: "A Free Docs",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Inicio', link: '/'},
            {text: 'Docs', link: '/welcome'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    /*{ text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }*/
                    {
                        text: 'Base de datos',
                        items: [
                            {
                                text: 'Introducción',
                                link: '/database/intro'
                            },
                            {
                                text: 'SQL',
                                link: '/database/sql'
                            }
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
