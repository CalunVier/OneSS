import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";


const randomPic = async (req: NextApiRequest, res: NextApiResponse) => {
    res.redirect(307, `https://api.mtyqx.cn/api/random.php`)
}
export default random
