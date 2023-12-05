import { useState } from "react";

export default function ChangeStateValue2() {
    const [stateValue, setStateValue] = useState(10);

    console.log('ChangeStateValue2');

    function setValue() {
        setStateValue(s => s + 1);
    }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue2</button>
            <div>
                {stateValue}
            </div>
        </>
    );
}