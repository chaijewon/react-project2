/*
    JavaScript 

    1. Java언어 : 제임스 고슬링 / 아서벤
                 ======        ======
                   Ja              va 
    2. Java => 오크립스 : 가전제품
               : 게임기 
    3. 모든 제품을 한개의 리모콘으로 제어 
       그린프로젝트 
       => 투자하는 사람이 없다 
       => 폐업 
    4. 브라우저업체에서 인수 
       => JavaScript 
    5. 1996 => 5/23 자바언어 탄생 
    6. MS / 연합군 
    7. MS => 데이터베이스 MySQL
    8. 부도 => 오라클 
                | 유료 
              제임스 고슬링 => 구글 
                             => GO / Dart 
                             => AngularJS
    --------------------------------------
    자바스크립트 
    => 브라우저 제어 / HTML 제어할때 사용 
    => 브라우저에서만 사용이 가능 
    
    1) 변수 : 메모리에 1개의 데이터를 저장 
       var => 사용빈도가 거의 없다 
       let => 자동 지정 변수 
              정수 / 실수 / 문자 / 논리 / 배열 /
              객체...
       const => 상수형 
    2) 연산자 
        산술 : + , - , * , / , %
              3+3=6 
              5%2=1 => 나머지 
              5/2=2.5
        비교 : ==(같다) , != , < , > ,<= ,>=
              결과값 : true/false 
        논리 : && , ||
        대입 : = , += , -= 
    3) 제어문 
         if  : 조건문 
         if ~ else 
         for : 반복문 
    4) 함수 : 기능 처리 
       function func명()
       {
       }
       const func명=function(){}
       const func명=()=>{}

       function  A(){
          처리 
       }
       <A/>
       function B(){
         
       }
       <B/>
    5) 이벤트 처리 
    6) 외부 데이터 읽기 

    React의 단점 
    ------------
     HTML을 사용시에 반드시 루트태그가 존재
     <div>
      <img/> 
      <img/>
      <img/>
     </div> 

     대소문자 구분 
     => function func명 
                 ------ 대문자 시작 
     => html은 소문자로만 한다 
     => 속성값 => ""
     => class : className
     => return (
        )
*/
function App1(){
   return (
     <div className="container">
        <div className="row">
            <Input1/>
            <Input2/>
            <Btn/>
        </div>
     </div>
   )
}
function Input1(){
    return (
      <input type="text" size={"20"}
        className="input-sm" 
        placeholder="아이디"/> 
    )
}
function Input2(){
    return (
      <input type="password" size={"20"}
        className="input-sm" 
        placeholder="비밀번호"/> 
    )
}
function Btn(){
    return (
        <input type="button"
         className="btn-sm btn-danger"
         value={"로그인"}/>
    )
}
export default App1;