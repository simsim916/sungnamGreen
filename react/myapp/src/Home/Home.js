import { Route, Routes, Navigate } from 'react-router-dom';
import WelcomeToPage from '../WelcomeToPage/WelcomeToPage';

export default function Home({ firstVisit }) {
    return (
        <>
            <h1>홈 페이지</h1>

            {firstVisit && <Navigate to="/WelcomeToPage"  />}
            <Routes>
                <Route path='/WelcomeToPage' element={<WelcomeToPage />} />
            </Routes>
        </>
    );
}