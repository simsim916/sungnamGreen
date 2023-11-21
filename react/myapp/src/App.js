import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 
    < 컴포넌트(Component) >

- JSX 형식으로 구성된 HTML 요소들을 함수 또는 클래스 형태로 그룹핑함으로써 효율적 렌더링
  수행을 위한 리액트의 요소.
  컴포넌트는 대문자로 시작해야 하는 것이 명시적 규칙이며 import 시 이니셜이 소문자로
  시작하면 컴파일 에러가 발생되어 렌더링되지 않음.
  XML 과 같이 태그의 컨텐트가 존재하지 않는 경우에는 닫는 태그없는 형식으로 지정.
  이때 반드시 태그명 뒤에는 구분자 "/" 가 와야함에 주의.
*/
function TestReact() {
  return <h1>테스트 리액트</h1>;
}

/*
    < 리액트 렌더 형식1 >

- 정의된 함수 호출을 통해 JSX 형식으로 구성된 요소들을 반환받아 render 메서드의 인수로
  전달함으로써 화면상에 구현.
*/
root.render(
  TestReact()
);

/*
    < 리액트 렌더 형식2 >

- XML 형식의 태그 형식으로 함수를 호출함으로써 상기와 동일한 실행 결과를 확인 가능.
  결과적으로 컴포넌트란 함수 호출을 태그 형식으로 변환하여 표현한 특정 표현식에 불과.
*/
root.render(
    <TestReact />
);