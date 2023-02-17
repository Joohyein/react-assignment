import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TodoList = ({item, removeBtnClickHandler, onToggle}) => {
    return (
        <StBox>
            <StContents>
                <StLink to={`/todo/${item.id}`}>상세페이지</StLink>
                <StTitle className="todo-title">{item.title}</StTitle>
                <StContent className="todo-content">{item.content}</StContent>
            </StContents>
            <StBtn>
                <StBtnDelete onClick={()=>removeBtnClickHandler(item.id)}>삭제</StBtnDelete>
                {!item.isComplete ? <StBtnDone onClick={()=>onToggle(item.id)}>완료</StBtnDone> : <StBtnCancel onClick={()=>onToggle(item.id)}>취소</StBtnCancel>}
            </StBtn>
        </StBox>
    )
}

export default TodoList; 

const StBox = styled.div`
    margin: 10px;
    width: 300px;
    height:200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #204383;
    border-radius: 8px;
`;
const StContents = styled.div`
    padding:20px;
`
// const StLink = styled.Link`
// `;

const StTitle = styled.div`
    font-size:30px;
    margin-bottom: 10px;
`;
const StContent = styled.div`
    font-size:20px;
`;
const StBtn = styled.div`
    margin-bottom: 10px;
    width:100%;
    display: flex;
    justify-content: center;
`;
const StBtnDelete = styled.button`
    border:2px solid #ec7070;
    padding:10px;
    border-radius: 5px;
    width:40%;
    margin-right:10px;
    cursor: pointer;
`;
const StBtnDone = styled.button`
    border:2px solid #3189a6;
    padding:10px;
    border-radius: 5px;
    width:40%;
    cursor: pointer;
`
const StBtnCancel = styled.button`
    border:2px solid #f6ab5c;
    padding:10px;
    border-radius: 5px;
    width:40%;
    cursor: pointer;
`
const StLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover, &:visited{
        color:green;
    }
`