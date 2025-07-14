import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App3 from './App3';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 객체 => 한명에 대한 정보 {키:값,키:값...}
// 여러개를 동시 => 배열 ["홍길동","..."]
/*
   1 2 8 5 6 7 8 9 
   => [1 2 8 5 6 7 8 9]
*/
const data={
      name:"홍길동", 
      sex:"남자", 
      age:"20", 
      address:"서울", 
      phone:"010-1111-1111"
}
root.render(
    <App3 data={data}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
