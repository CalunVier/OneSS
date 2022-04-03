import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";


const randomPic = async (req: NextApiRequest, res: NextApiResponse) => {
    const url = await getRandomPic()
    res.redirect(307, `{url}`)
}
export default randomPic

async function getRandomPic() {
    const idx = Math.floor(Math.random() * 8)
    const url = encodeURI(`https://api.mtyqx.cn/api/random.php`)
    try {
        const res = await axios.get(url, {
            headers: {
                'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Mobile Safari/537.36'
            },
        })
        var test = window.location.href
        return test
    } catch (e) {
        return {status: 233}
    }
}
