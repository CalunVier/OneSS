const customSetting = {
    siteName: process.env.SITE_NAME,
    index: {
        backgroundImage: '/api/bingPic',
        title: 'OneDrive',
        introduction: 'Kared的网络硬盘对象存储服务'
    },
    link: {
        github: 'https://github.com/huarzone/',
        mail: {
            enable: true,
            link: 'kared@huarzone.com'
        },
        twitter: {
            enable: true,
            link: 'https://twitter.com/'
        },
        bilibili: {
            enable: true,
            link: 'https://bilibili.com/'
        },
        youtube: {
            enable: false,
            link: 'kared@huarzone.com'
        },
    },
}

export default customSetting
