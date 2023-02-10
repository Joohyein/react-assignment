import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../shared/data';

function Work() {
    const params = useParams();
    // console.log(params);
    // {id: '1'}

    // 어떤 todo인지 찾아보기
    const foundData = data.find((item)=>{
        // console.log('item--------')
        // console.log(item);
        // console.log('item.id----------')
        // console.log(item.id);
        // console.log('item.params')
        // console.log(params.id); 

        return item.id === parseInt(params.id);
    });

    console.log(foundData); // undefined - 자료형이 맞지 않아서

  return (
    <div>
        <h2>{foundData.todo}</h2>
    </div>
  )
}

export default Work