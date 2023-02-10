// router 설정 파일
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/works/:id" element={<Works />} />
            </Routes>
        </BrowserRouter>
    )
}
// boilerplate와 밀접한 관계가 있다. 이해하지 말고 사용법 숙지!!

export default Router;

// 동적 라우팅
// 존재하지 않는 데베인 경우에는 