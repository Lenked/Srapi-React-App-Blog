import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { authenticate } from '../services/authAPI';
import { useNavigate } from 'react-router-dom';
import authContext from '../context/authContext';

const LoginPage = () => {

    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        identifier: "",
        password: "" 
    })
    const {setIsAuthenticated} = useContext(authContext)

    const handleChange = ({currentTarget}) => {
        const { value, name } = currentTarget
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            authenticate(credentials)
            setIsAuthenticated(true)
            navigate('/admin')
        } catch (error) {
            console.log(error)   
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField 
                    id='identifier'
                    label="Username"
                    type='text'
                    name='identifier'
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField 
                    id='password'
                    label="Password"
                    type='password'
                    name='password'
                    onChange={handleChange}
                />
            </div>
            <div>
                <Button variant='contained' color='primary' type='submit' >
                    Login
                </Button>
            </div>
        </form>
    );
}

export default LoginPage;
