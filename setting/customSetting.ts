const customSetting = {
    siteName: process.env.SITE_TITLE,
    index: {
        backgroundImage: '/api/bingPic',
        title: process.env.INDEX_TITLE,
        introduction: process.env.INDEX_INTRO
    },
    link: {
        github: process.env.MY_GITHUB,
        mail: {
            enable: true,
            link: process.env.MY_EMAIL
        },
        twitter: {
            enable: true,
            link: process.env.MY_TWITTER
        },
        bilibili: {
            enable: true,
            link: process.env.MY_BILIBILI
        },
        youtube: {
            enable: true,
            link: process.env.MY_YOUTUBE
        },
    },
}

export default customSetting
