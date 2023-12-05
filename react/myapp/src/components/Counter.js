/* 
    < 프리젠테이셔널(Presentational) 컴포넌트 >

- 주로 UI 요소를 렌더링하고, 사용자 인터페이스를 표시하는 역할을 담당하는
  컴포넌트로써, 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는
  함수의 참조를 컨테이너 컴포넌트로부터 props 로 받아 사용하는 컴포넌트.
  따라서 상태를 관리하거나 앱의 데이터를 가져오는 역할을 하지 않고, 주어진
  데이터나 프로퍼티를 받아 렌더링하는 역할을 주로 담당.
  이렇게 함으로써 컴포넌트의 재사용성과 이식성 증대.
*/

function Counter({ number, gap, onIncrease, onDecrease, onSetGap }) {
    const onChange = e => {
        onSetGap(+e.target.value);
    };
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={gap} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;