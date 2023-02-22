import axios from "axios";

// 모든 todos를 가져오는 api
const getBooks = async () => {
  const response = await axios.get("http://localhost:4000/books");
  return response;
};

export { getBooks };
// 컴포넌트가 렌더링 될 때 불러오기