import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
            <h3>메인</h3>

            {/* 
                to : Route 의 path 에 명시된 경로와 일치하는 경로를
                     지정해야만 해당 컴포넌트가 정상적으로 로드되며
                     일치하지 않는 경우, App 컴포넌트의 라우트 설정
                     에 의해 NotFound 컴포넌트가 로드.
            */}
            <ul>
                <li><Link to="/Product1">1번상품</Link></li>
                <li><Link to="/Product2">2번상품</Link></li>
            </ul>
        </>
    );
};

export default Main;