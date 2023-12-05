import { useState } from "react";
import changeStateValueStyle from '../css/ChangeStateValue.module.css'   // CSS 모듈을 사용자 정의 모듈명으로 임포트.

export default function ChangeStateValue({ transValue }) {
    const [stateValue, setStateValue] = useState(5);

    function setValue() {
        setStateValue(stateValue + 1);
        transValue(stateValue);
    }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue</button>
            <div className={changeStateValueStyle.value}>
                {stateValue}
            </div>
        </>
    );
}