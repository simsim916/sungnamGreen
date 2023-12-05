/* 
    < Ducks 패턴 >

- 리덕스의 상태 관리를 구조화함으로써, 유지 관리 편의성을 증대시키고
  각 모듈이 독립적이기 때문에 협업과 코드 재사용성 상승 효과에 기여.

1) 액션 타입, 액션 생성자, 리듀서를 하나의 파일로 통합 관리.

2) 각 액션에 대한 타입을 문자열 상수로 정의하여 중복을 방지하고 가독성 증대.

3) 액션 타입을 정의할 때, 특정 기능에 대한 고유한 네임스페이스를 적용함으로써
   명칭 충돌을 방지. ( 예시 : 네임스페이스/액션타입 )
   일반적으로 네임스페이스는 상태 관리와 관련된 독립적인 기능을 모듈화한 명칭을
   소문자 형식으로 표기.
*/

/*
    < 액션 타입 정의 >
    
- 액션 타입을 정의할 때 각 기능에 대한 모듈화 명칭을 네임스페이스(counter/)로
  지정함으로써 다른 모듈과의 액션 타입 충돌을 최소화.
*/
const SET_GAP = 'counter/SET_GAP';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/*
    < 액션 생성자 정의 >

- 실제 액션 로직을 결정할 주체가 되는 액션 객체를 생성하여 반환하는 함수를
  정의하고, 이를 사용하려는 모듈에서 임포트하여 사용키 위해 선언과 동시에
  export.
*/
export const setGap = gap => ({ type: SET_GAP, gap });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/*
    counter 모듈의 초기 상태값 설정.
*/
const initialState = {
    number: 0,
    gap: 1
};

/*
    < counter 모듈에 대한 리듀서 정의 >

- 리듀서를 정의하고 export default 로 지정함으로써 counter 모듈내의
  index.js 에서 combineReducers 함수를 사용하여 다중 모듈의 리듀서를
  루트 리듀서로 통합.
*/
export default function counter(state = initialState, action) {
    console.log('counter 모듈 리듀서 실행~');

    switch (action.type) {
        case SET_GAP:
            return {
                ...state,
                gap: action.gap
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.gap
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.gap
            };
        default:
            return state;
    }
}