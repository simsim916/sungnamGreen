import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setGap } from '../modules/counter';

/* 
    < 컨테이너 컴포넌트 >

- 일반적으로 UI를 표시하거나 사용자 인터페이스와 관련된 작업을 수행하는 프리젠테이셔널
  컴포넌트들을 렌더링 요소로 포함함으로써, 직접적인 인터페이스의 조작이나 표시는
  프리젠테이셔널 컴포넌트가 구현하되, 컨테이너 컴포넌트는 리덕스 스토어의 상태를 직접
  조회하거나, 액션을 직접 디스패치하는 역할을 담당.
  즉, 컨테이너 컴포넌트는 리덕스 스토어와 직접 상호 작용하여 데이터를 가져오고 업데이트
  하는 역할을 수행하되, 실제 인터페이스 조작을 담당하는 프리젠테이셔널 컴포넌트에
  스토어의 상태나 디스패치함수의 참조를 props 로 전달함으로써, 실제 동작이나 표시는
  프리젠테이셔널 컴포넌트가 담당하지만, 그 동작이나 표시를 위한 실제 스토어의 접근과
  조작은 컨테이너 컴포넌트가 담당.
*/
function CounterContainer() {
    /* 
        < useSelector Hook >

    - useSelector 함수를 호출할 때, 익명객체를 인자로 넣되 매개변수를 지정하면 해당
      매개변수가 읽기 전용 스토어 객체의 참조를 반환.
      따라서 해당 매개변수를 통해 조회 대상이 되는 스토어 객체의 상태값을 원하는 부분만
      추출하여 조회 가능.
      단, useSelector 함수는 인자로 전달되는 콜백함수의 결과로 반환되는 객체나 배열이
      변경되면, 스토어의 상태가 변경되지 않아도 리렌더링이 발생될 수 있어 성능 저하의
      원인이 될수 있음. 이는 단순히 스토어의 조회 목적으로 useSelector 함수를 호출하는
      경우에도 콜백함수가 반환하는 객체나 배열의 내부 데이터의 변경이 없음에도 콜백함수로
      반환되는 결과가 변경된 것으로 리랙트에서는 간주되어 불필요한 리렌더링이 발생할 수
      있어 아래와 같은 경고 발생.
      하지만 리덕스의 useSelector 함수는 이전과 현재 시점에서 반환되는 객체나 배열의 내부
      데이터 변경이 아닌, 객체의 참조를 비교하는 얕은 비교를 수행함으로써 동일
      객체로 인식하여 메모제이션으로 인한, 이전 객체의 주소를 그대로 참조.
      즉, 스토어의 변경이 없는 상태에서 useSelector 함수를 통한 상태 조회를 리덕스에서의
      처리는 메모제이션으로 처리되지만 리액트에서는 새로운 객체를 반환받아 변경된 것으로
      인정되는 괴리가 발생.
      당 예시의 경우 버튼이나 input 데이터가 변경될 때 마다 스토어의 상태가 디스패치되고
      useSelector 로 변경된 새로운 객체를 반환받지만, React-Redux 의 내부 최적화로 인한
      useSelector의 메모이제이션을 통해 리렌더링이 발생치 않음.
      따라서 이러한 리덕스의 성능 최적화 기능과 리액트 자체의 검사 알고리즘의 괴리로 인해
      아래와 같은 경고가 발생.
      당 예시에서와 같은 경고 회피나, 조회만을 목적으로 하는 경우 및 성능 최적화를 위해서는
      객체나 배열이 아닌 계산 비용이 단순한 값이 반환되도록 하거나, shallowEqual 함수 활용,
      메모제이션 및 Reselect 라이브러리등을 활용하여 해결 가능.
      
      경고! Selector unknown returned a gaperent result when called with the same parameters.
            This can lead to unnecessary rerenders.
            Selectors that return a new reference (such as an object or an array) should be memoized

      ※ 매개변수를 통회 조회된 스토어의 참조는 legacy_createStore 로 반환된 스토어
         객체의 참조에 getState() 함수를 호출했을 때의 결과물과 동일.

    ==============================================================================================

        < 얕은 비교와 깊은 비교 >

    - 얕은 비교 : 객체나 배열의 참조 주소를 비교.

    - 깊은 비교 : 객체의 경우 프로퍼티와 값을 비교하고 배열의 경우 모든 요소값을 비교한 결과가
                  같다면 참조가 달라도 동일하다고 평가.


    - shallowEqual 함수 : 일반적으로 === 연산자는 주소 자체를 비교하는 얕은 비교를 하는 반면,
                          shallowEqual 함수는 얕은 비교를 하는 것은 동일하지만 === 연산자와는
                          비교 알고리즘이 좀 더 복잡한 구조를 가져, 깊은 비교를 수행하는 경우도
                          발생.
    */
    const { number, gap } = useSelector(
        state => ({
            number: state.counter.number,
            gap: state.counter.gap
        }),
    );

    console.log('CounterContainer 렌더링');

    /*
        < useDispatch Hook >

    -  디스패치할 액션을 인자로 하는 useDispatch 함수를 호출함으로써 루트 리듀서를
       모두 실행도록 하는 함수의 참조를 반환.
       해당 함수의 참조를 통해 호출을 하면 루트 리듀서에 등록된 모든 리듀서가 실행
       되는 것을 확인 가능하며, 이를 통해 인자로 전달된 액션에 해당하는 리듀서를
       모두 실행하여 선별된 액션에 해당하는 리듀서를 통해 업데이트.
    */
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetGap = gap => dispatch(setGap(gap));

    return (
        <Counter
            number={number}
            gap={gap}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetGap={onSetGap}
        />
    );
}

export default CounterContainer;