// import React, { useContext } from 'react'
// import { FamilyContext } from '../context/FamilyContext'

// const style = {
//     color: 'yellowgreen',
//     fontWeight: '900',
// }
// // 컨텍스트로 데이터 받아오기
// // props로 내려온 데이터를 사용한 게 아니다.
// function Child() {
//     const data = useContext(FamilyContext); // houseName, pocketMoney가 들어있다.
//   return (
//     <div>
//         나는 이 집안의 먁내야<br />
//         할아버지가 우리집 이름은 <span style={style}>{data.houseName}</span> 이라고 하셨어 알겠니?<br />
//         용돈도 <span style={style}>{data.pocketMoney}</span> 만큼이나 줬어
//     </div>
//   )
// }

// export default Child