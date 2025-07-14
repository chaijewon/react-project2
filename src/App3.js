/*
    props : 속성으로 값을 전송 => 변경이 불가능  
    state : 외부 데이터 읽기 => 변경이 가능 
*/
// <App3 name="홍길동" sex="남자" age="20"/>
function App3(props){
   return (
     <div className="container">
        <div className="row">
            <h1>이름:{props.name}</h1>
            <h1>성별:{props.sex}</h1>
            <h1>나이:{props.age}</h1>
            <h3>주소:{props.address}</h3>
            <h3>전화:{props.phone}</h3>
        </div>
     </div>
   )
}
export default App3; // 다른 파일에서 읽기 
// index.js