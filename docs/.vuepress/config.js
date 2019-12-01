module.exports = {
    title: 'Godaangel的博客',
    description: '记录开发中的问题和学习记录',
    serviceWorker: true, //支持pwa
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
    ],
    themeConfig: {
        nav: [
            { text: '前端', link: '/fe/' },
            { text: 'NodeJS', link: '/nodejs/' },
            // {
            //     text: '博文',
            //     items: [
            //         { text: 'Android', link: '/android/' },
            //         { text: 'ios', link: '/ios/' },
            //         { text: 'Web', link: '/web/' }
            //     ]
            // },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/godaangel' },
        ],
        sidebar: {
            '/fe/': [{
                title: 'Vue',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'vue/vue-render',
                    'vue/vue-image-lazy-load',
                    'vue/vue-components-event',
                    'vue/vue-self-model',
                    'vue/vue-for-key'
                ]
            }, {
                title: '小程序',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'mini/mini-video-auto-play',
                    'mini/mini-long-flow'
                ]
            }, {
                title: 'JS',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'js/extends-prop',
                    'js/decorator',
                ]
            }, {
                title: 'CSS',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'css/hide-scroll-style',
                ]
            }, {
                title: 'Webpack',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'webpack/less-path'
                ]
            }],
            '/nodejs/': [{
                title: 'Node',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'express-install',
                    'express-install-qa',
                    'express-html'
                ]
            }],
        },
        sidebarDepth: 1,
        lastUpdated: '最后更新',
    }
}