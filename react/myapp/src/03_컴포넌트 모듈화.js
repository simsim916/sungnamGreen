import React from 'react';
import ReactDOM from 'react-dom/client';
import TestReact from './TestReact';        // 모듈화 컴포넌트의 경로 임포트.
import TestReact2 from './TestReact2';      // 형식 : import 컴포넌트명 from 문자열 형태의 모듈명
//                                          // js 파일의 경우 확장자(js) 생략 가능.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {/* 모듈화된 컴포넌트 호출을 통한 렌더링 요소를 할당. */}
    <TestReact />
    <TestReact2 />
  </>
);