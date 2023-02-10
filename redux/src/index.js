import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
// export default로 내보냈기 때문에 중괄호가 필요없다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// App이라는 컴포넌트가 Provider의 지배권 안으로 들어오게 된다.
// Provider는 우리가 만든 store를 기반으로 지배권을 행사한다.
// store로 만들어 놓은 중앙 데이터 관리소를 App 컴포넌트가 있는 곳 전체에서 Store를 쓸 수 있다는 말이다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
