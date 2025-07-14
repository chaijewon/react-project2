/*
    index.js <App2/> : 함수/메소드 => 호출
                |
               return안에 있는 html을 읽는다 
               ---------------------------
                index.html 
                <div id="root">|</div>
                             html 추가
*/
function App2(){
   return (
     <div className="container">
        <div className="row">
          <select className="input-sm">
            <option>동영상</option>
            <option>인기영화</option>
            <option>인기TV</option>
          </select>
        </div>
     </div>
   )
}

export default App2;