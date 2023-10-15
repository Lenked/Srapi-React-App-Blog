import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authContext from '../context/authContext';

const AdminPostsPage = () => {
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(authContext)

    if(!isAuthenticated) {
        return navigate('/')
    }
    return (
        <h1>
            Hello ADMIN
        </h1>
    );
}

export default AdminPostsPage;
