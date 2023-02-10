import React, { useState, useMemo } from 'react'

function HeavyComponent() {
    const [count, setCount] = useState(0);

    const heavyWork = () => {
        for(let i = 0; i < 100000000; i++){}
        return 100;
    }
    const value = useMemo(()=>heavyWork(),[]);
  return (
    <div>
        <p>나는 무거운 컴포넌트야</p>
        <button onClick={()=>{
            setCount(count + 1);
        }}>클릭하면 아래 count가 증가해요</button> <br />
        {count}<br />
        {value}
    </div>
  )
}

export default HeavyComponent