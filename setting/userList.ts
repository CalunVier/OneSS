const userList: userListType = {
    users: ["share@m.huarzone.com", "nf@m.huarzone.com", "ct@m.huarzone.com", "mv@m.huarzone.com"],
    nickname: {
        "share@m.huarzone.com": '✨ 我的对象存储主站',
        "nf@m.huarzone.com": '🔥 影视对象存储服务-NF',
        "ct@m.huarzone.com": '🐻 影视对象存储服务-CT',
        "mv@m.huarzone.com": '🍭 影视对象存储服务-MV',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

