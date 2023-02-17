import axios from "axios";

// instance를 생성할 수 있는 api를 호출
// axios를 구성하는 환경설정 관련 코드가 입력값으로 들어간다.
// configuration
// 아래 instance를 통해서 axios요청을 한다.
const instance = axios.create({
    baseURL: 'http://localhost:4000',
    // timeout: 1,
});
// timeout : 요청을 보낼 때 몇 초 이상 기다리게 하면 오류가 난다.

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