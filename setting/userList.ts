const userList: userListType = {
    users: ["onedrivetest1@chyee.onmicrosoft.com"],
    nickname: {
        "onedrivetest1@chyee.onmicrosoft.com": '✨ 我的对象存储主站 🐳'
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

