import axios from "axios";

const BASE_URL = "http://localhost:4000";

// instance를 생성할 수 있는 api 호출
// instance를 통해서 axios 요청
const instance = axios.create({
    baseURL: 'http://localhost:4000',
});

// instance의 속성들을 하나씩 추가
instance.interceptors.request.use(
    // 요청을 보내기 전 수행
    function(config){
        console.log('intercept 요청 성공');
        return config;
    },

    // 오류 요청을 보내기 전 수행
    function(error){
        console.log("intercept 요청 오류");
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    // 서버로부터 정상 응답을 받은 경우
    function(response){
        console.log("intercept 정상 응답 수신");
        return response;
    },

    // 서버로부터 오류 응답을 받은 경우
    function(error){
        console.log("intercept 오류 응답 수신");
        return Promise.reject(error);
    }
)

export default instance;