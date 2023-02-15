import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TodoList from "../pages/TodoList";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todoList" element={<TodoList />}/>
            </Routes>
        </BrowserRouter>
    )
}