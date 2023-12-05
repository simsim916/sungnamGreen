/* < 액션 타입 정의 > */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 
    할일(todos) 목록을 관리하기 위한 고유 식별자 id 설정.
*/
let nextId = 1;

/* < 액션 생성자 정의 > */
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

/*
    todos 모듈의 초기 상태값 설정.
    아래와 같은 형태의 객체로 배열에 저장되도록 설정.

    {
        id: 1,                          - 개별 할일 목록에 대한 식별자 역할
        text: '할일 내용',              
        done: false                     - 개별 할일 목록에 대한 line-through 표시 여부. ( 클릭했을 때 처리 동작 )
    }

    단, 프로퍼티 done 은 최초 목록을 등록시에는 할당이 되지 않지만,
    목록을 클릭했을 때 추가 되도록 설정.
*/
const initialState = [];

export default function todos(state = initialState, action) {
    console.log('todos 모듈 리듀서 실행~');

    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, done: !todo.done }  // 최초 클릭시에는 done 프로퍼티가 존재하지 않으므로
                    : todo                           // undefined 가 할당되고 ! 연산자를 통해 형변환되어
                // true 가 되도록 설정.
            );
        default:
            return state;
    }
}