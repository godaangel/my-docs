module.exports = {
    title: '个人主页',
    description: 'Godaangel的个人主页',
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
                sidebarDepth: 2,
                children: [
                    'vue-render'
                ]
            }],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}