import React from 'react'

function Todo() {
  return (
    <div>
        <div className='container'>
            <p>ID : </p>
            <button>이전으로</button>
        </div>
        <div className='container'>
            <div className='title'></div>
            <div className='content'></div>
        </div>
    </div>
  )
}

export default Todo