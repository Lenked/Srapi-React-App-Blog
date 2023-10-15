import  { useContext } from 'react';
import authContext from '../context/authContext';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({path, element}) => {
    const { isAuthenticated } = useContext(authContext)
    const navigate = useNavigate()

    if(isAuthenticated) {
        return <Route path={path} element={element} />
    } else{
        return navigate('/')
    }
}

export default PrivateRoute;
