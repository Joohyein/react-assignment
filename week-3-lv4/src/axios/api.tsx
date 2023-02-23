// axios 요청이 들어가는 모든 모듈
import axios from "axios";

const BASE_URL = "http://localhost:4000";

// 조회
const getBooks = async() => {
    const response:any = await axios.get(`${BASE_URL}/books`);
    return response.data;
};

// 추가
const addBooks = async(newBook:any) => {
    await axios.post(`${BASE_URL}/books`, newBook);
};

// 삭제 
const removeBook = async(id:string) => {
    await axios.delete(`${BASE_URL}/books/${id}`);
};

// 변경
const reviseBook = async ({id, value}:{id:number, value:string}) => {
    await axios.patch(`${BASE_URL}/books/${id}`, {
      bookReport: value,
    });
  };

export {getBooks, addBooks, removeBook, reviseBook};

