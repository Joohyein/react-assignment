import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../shared/data';

function Works() {
  return (
    <div>
      <h3>list</h3>
      {data.map((value)=>{
        return (
          <div key={value.id}>
            {value.id} 
            <Link to={`/works/${value.id}`}>{value.todo}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Works