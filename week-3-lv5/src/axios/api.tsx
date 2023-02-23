import axios from "axios";
import { useCookies } from "react-cookie";
import { getCookie } from "../util/cookie";

const BASE_URL = "http://3.38.191.164/";

// const [cookies, setCookies] = useCookies(['id']);

// const addInfo = async(newInfo:object) => {
//     const response = await axios.post(`${BASE_URL}/login`, newInfo)
//     const token = response.data
//     .then((res)=>setCookies('id', token));
//     const decodedInfo = jwt_decode(token)
//     localStorage.setItem('userInfo', JSON.stringify(decodedInfo))

// };

// const getInfo = async() => {
//     await axios({
//         method: 'get',
//         url: `${BASE_URL}/login`,
//         headers: {
//             "ContentType": "application/json",
//             Authorization: `Bearer ${getCookie('myToken')}`
//         }
//     })
// }

// export {getInfo};

// setCookie('accessJwtToken', token) // 쿠키에저장
// const decodedUserInfo = jwt_decode(token) // 토큰 decode
// localStorage.setItem('userInfo', JSON.stringify(decodedUserInfo))