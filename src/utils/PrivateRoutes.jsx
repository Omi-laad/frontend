

import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
    const token = localStorage.getItem('token');
    console.log(token)
    return (
        <>
            {token  ? <Outlet /> : <Navigate to="/login" />}
        </>
    );
};

export default Private;