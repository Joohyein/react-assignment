import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/module/todos';

interface Props {
  title: string;
  id: number;
}

const TodoItem: React.FC<Props> = ({ title, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {title}
      <button onClick={() => dispatch(removeTodo(id))}>X</button>
    </div>
  );
};

export default TodoItem;
