import { useState } from 'react';

export default function Child() {
    const [childValue, setChildValue] = useState(0);

    return (
        <>
            <div>자식의 상태값 : {childValue}</div>
            <button onClick={() => setChildValue(childValue + 1)}>자식값 증가</button>
        </>

    )
}