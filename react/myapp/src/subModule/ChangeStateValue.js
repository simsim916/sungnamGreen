import { useState } from "react";

/* 
    계층화된 상위 컴포넌트로부터 파생된 하위 특정 임의 컴포넌트가
    해당 상태값 변화에 따라 다시 리렌더링 되더라도 다른 하위
    컴포넌트들은 함께 재렌더링되지 않고 변화가 발생치 않는 독립적
    특성을 확인 가능.
    단, 이는 하위 계층에서의 렌더링 특성을 의미.
    
*/
export default function ChangeStateValue() {
    const [stateValue, setStateValue] = useState(5);

    console.log('ChangeStateValue');

    function setValue() {
        setStateValue(s => s + 1);
    }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue</button>
            <div>
                {stateValue}
            </div>
        </>
    );
}