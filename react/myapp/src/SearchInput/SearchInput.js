import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SearchInput({ users }) {
    const inputId = useRef();

    /* 
        < useNavigate Hook >

    - 라우터를 통해 다른 경로로 이동하는 데 사용되는 Hook 로써 useNavigate
      호출하면 다른 라우트(Route) 경로로 이동 가능한 함수의 참조를 반환받아
      해당 함수를 호출함으로써 인수로 문자열 형태의 라우트 path 경로를 명시
      하여 해당 컴포넌트를 렌더링 가능.

    ※ React Hook 은 함수 컴포넌트 내에서만 전역적으로 호출 가능함으로써 아래
       serchId 함수 내에서 지역적으로 호출 불가함에 주의.
    */
    const navigate = useNavigate();

    function serchId(e) {
        e.preventDefault();

        const userId = inputId.current.value;

        if (users.find(user => user.userId === userId)) {
            /* 
                < 쿼리 스트링(Query String) >

            - 쿼리 스트링은 URL의 끝에 ? 구분자를 기준으로 우변에 "키=값" 형식의
              쌍으로 이루어진 데이터를 표현함으로써 URL 에 간단한 추가 정보를
              전달하는 목적으로 사용.
              
            =====================================================================

                < Route 의 경로 매칭 >

            - Route 의 path 에는 쿼리 스트링을 포함하지 않고 경로 부분만을 매칭.
              즉, 라우트가 일치하는지의 여부는 경로 부분만을 고려.
            */
            navigate(`/Blog/?userId=${userId}`);
        } else {
            navigate('/NOtFound');
        }
    }

    return (
        <>
            <div>사용자 검색</div>

            <form onSubmit={serchId}>
                <input
                    type="text"
                    placeholder='사용자 아이디'
                    ref={inputId}
                />
                <button >검색</button>
            </form>
        </>
    );
}