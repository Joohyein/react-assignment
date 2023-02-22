import axios from "axios";
import { useCookies } from "react-cookie";
import { getCookie } from "../util/cookie";

const BASE_URL = "http://3.38.191.164/";

const [cookies, setCookies] = useCookies(['id']);

const addInfo = async(newInfo:object) => {
    await axios.post(`${BASE_URL}/login`, newInfo)
    .then((res)=>setCookies('id', res.data.token));
};

const getInfo = async() => {
    await axios({
        method: 'get',
        url: `${BASE_URL}/login`,
        headers: {
            "ContentType": "application/json",
            Authorization: `Bearer ${getCookie('myToken')}`
        }
    })
}

export {addInfo, getInfo};