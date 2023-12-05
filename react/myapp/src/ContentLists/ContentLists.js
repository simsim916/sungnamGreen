import { Link } from 'react-router-dom';    // Link 태그 적용을 위한 react-router-dom 모듈로부터
//                                          // Link 모듈 임포트.

/* 
    리액트에서는 링크를 걸기 위해 a 태그 대신
    BrowserRouter 라이브러리의 Link 태그를 활용.
    실제 브라우저 렌더링 과정에서 Link 태그를
    a 태그로 변환하여 처리.
*/
export default function ContentLists({ userList, getLoadList }) {
    /* 
        Link 태그에 대한 부모인 li 태그로 이벤트 위임 처리.
        Link 태그는 브라우저 렌더링 과정에서 a 태그로
        변환되어 처리되므로 비교시에도 LINK 가 아닌 A 로
        비교해야함에 주의.
    */
    function loadList(e, user) {
        if (e.target.tagName === 'A') {
            getLoadList(user);
        }
    }

    return (
        <ul className='listTable'>
            {
                userList.map((user) =>
                    <li
                        className="eachList"
                        key={'sn' + user.serialNum}
                        onClick={(e) => loadList(e, user)}
                    >
                        {/*
                            Link 에만 백그라운드 지정을 위해 별도의
                            div 로 둘러싸서 li 를 균등하게 채우도록 처리.
                        */}
                        <div><Link to='/'>{user.serialNum}</Link></div>
                        <div><Link to='/'>{user.subject}</Link></div>
                        <div><Link to='/'>{user.userName}</Link></div>
                    </li>
                )
            }
        </ul>
    );
}