import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/config/configStore';
import api from "./axios/api";
import Router from './shared/Router';

function App() {
  const books = useSelector((state:RootState)=>state.books);

  useEffect(() => {
    api
      .get("/books")
      .then((res) => {
        console.log("결과 => ", res.data);
      })
      .catch((err) => {
        console.log("오류가 발생하였습니다!");
      });
  }, []);

  return <Router />
}

export default App;
