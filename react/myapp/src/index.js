import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* 
    JavaScript에서 모듈 시스템은 특정한 파일명을 가지는 폴더의 index.js
    파일을 기본적으로 불러오도록 구성.
    따라서 아래와 같이 폴더만 지정하여도 자동으로 index.js 를 먼저 검색.
*/
import rootReducer from './modules';

/* 
    < redux 패키지 >    -  npm add redux

    애플리케이션의 상태를 중앙 집중식 저장소(스토어)에 저장하고, 액션과
    리듀서를 설정하여 이를 관리.
    따라서 Redux 를 사용하여 애플리케이션의 전역 상태를 관리하고, 이러한
    상태를 컴포넌트 밖에서 조작하고 접근 가능.

=========================================================================

    < legacy_createStore > - 구버전 createStore 

- combineReducers 로 통합된 루트 리듀서 객체를 인자로 전달함으로써 전역
  상태 저장소(Stroe)를 생성하고 리듀서를 연동시킴으로써, 전역 상태 관리가
  가능한 스토어 객체의 참조를 반환.
  해당 참조를 Provider 컴포넌트의 프롭스로 전달하고 Provider 컴포넌트로
  하위 컴포넌트를 둘러쌈으로써, 계층화된 하위 컴포넌트에서는 별도의 임포트
  없이 스토어에 접근하여 상태 관리 및 조회가 가능.
  생성된 스토어를 통해 애플리케이션의 상태(state)를 관리하며, 상태 변화를
  추적하고 상태 변경에 따라 뷰를 업데이트(렌더링)하는 역할을 담당.
*/
import { legacy_createStore } from 'redux';

/* 
    < react-redux 패키지 >      - npm add react-redux

    Redux 를 React 애플리케이션과 통합하는 데 사용되는 패키지로써, React
    컴포넌트와 Redux 스토어를 연결하고, 상태를 React 컴포넌트에 주입하는
    역할을 담당.
    Provider 컴포넌트를 최상위 컴포넌트로 지정함으로써 프롭스를 통해,
    계층화된 하위 컴포넌트들에게 Redux 스토어를 제공.

    ※ 스토어를 Provider 컴포넌트의 store 프롭스로 전달하면 하위 컴포넌트
       에서는 이를 사용키 위해 다시 프롭스로 받는 것이 아니라,
       하위 컴포넌트에서 useSelector 와 useDispatch Hook 을 임포트하여
       스토어의 상태를 조회하고 업데이트를 처리.
       useSelector 함수를 호출함으로써 읽기 전용인 스토어 객체의 참조를 반환
       받을 수 있고, 디스패치할 액션을 인자로 하는 useDispatch 함수를 호출함
       으로써 루트 리듀서를 모두 실행도록 하는 함수의 참조를 반환.
*/
import { Provider } from 'react-redux';

const store = legacy_createStore(rootReducer);

/* 
    < getState 메서드 >

- 스토어의 현재 상태를 반환.
*/
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);