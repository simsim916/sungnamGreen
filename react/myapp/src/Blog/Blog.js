import { useSearchParams } from 'react-router-dom';

export default function Blog({ users }) {

    /* 
        < useSearchParams Hook >

    - 현재 라우트의 URL 에 포함된 쿼리 스트링을 손쉽게 얻거나 조작할 수
      있도록 하는 역할의 Hook.

    ================================================================================

    사용예시>    const [searchParams, setSearchParams] = useSearchParams();

    - useSearchParams 를 호출하면 위의 예시에서와 같이 쿼리 스트링을 조작 가능하도록
      하는 객체와 해당 객체를 실시간으로 업데이트 가능한 함수를 요소로하는 배열 반환.
      searchParams 나 setSearchParams 명칭은 관례적 표현일뿐 변경 가능.

    ================================================================================
    
        < searchParams >

    - 쿼리 스트링의 키를 통해 값을 읽고 쓸 수 있도록 하는 객체의 참조 반환.

        < searchParams 객체의 메서드 >

    get(key): 지정된 키에 해당하는 값을 반환.
    getAll(key): 지정된 키에 해당하는 모든 값을 반환. 즉, 전달된 쿼리 스트링의
                 키들이 동일한 형태로 중복되고 해당하는 키들의 값이 다른 경우
                 이를 모두 배열 형태로 반환.
    has(key): 지정된 키가 존재하는지 여부를 반환.
    set(key, value): 지정된 키를 지정된 값으로 변경.
                     단, 해당 메서드를 통해 키에 대응되는 값을 변경하더라도
                     React Router 컴포넌트와 함께 사용되는 동안에만 유지될뿐,
                     URL 에 바로 반영되지 않음.
    delete(key): 지정된 키와 해당 값을 삭제.
    toString(): 현재 쿼리 스트링을 문자열로 반환.

    ================================================================================

        < setSearchParams >

    - 쿼리 스트링을 실제 업데이트함으로써, URL 에 변경된 쿼리 스트링을 바로
      반영하여 변경된 쿼리 스트링에 기반한 결과를 바로 확인 가능.

    형식1   :       searchParams.set(key, value);
                    setSearchParams(searchParams);

    형식2   :       setSearchParams({
                        ...searchParams,
                        key: value,
                    });
    */
    const [searchParams] = useSearchParams(),
        query = searchParams.get("userId");

    return (
        <div>
            <h2>{`${query} 의 블로그`}</h2>
            <p>{users.find(e => e.userId === query).contents}</p>
        </div>
    );
}