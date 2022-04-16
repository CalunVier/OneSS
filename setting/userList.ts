const userList: userListType = {
    users: ["share@huarzone.com", "movie@huarzone.com", "music@huarzone.com"],
    nickname: {
        "share@huarzone.com": '✨ 我的对象存储主站 🐳',
        "movie@huarzone.com": '🔥 影视对象存储服务-MV',
        "music@huarzone.com": '🐻 音乐对象存储服务-MS',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

