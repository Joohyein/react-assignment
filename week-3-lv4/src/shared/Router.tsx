import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetail from "../pages/BookDetail";
import BookList from "../pages/BookList";
import Enroll from "../pages/Enroll";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/bookdetail/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;