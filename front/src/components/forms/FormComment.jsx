import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { create } from '../../services/commentAPI';

const FormComment = (props) => {

    const [comment, setComment] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const data = create(comment)
            console.log(data)
            setComment("")
            props.fetchComments()
        } catch(error) {
            console.log(error)
        }
    }

    const handleChange = (currentTarget) => {
        const { value, name } = currentTarget.target
        setComment({
            ...comment,
            post: props.id,
            [name]: value
        })
    }

    useEffect(() => {}, [comment])

    return (
        <form onSubmit={handleSubmit}>
         <TextField
            id="pseudo"
            label="Pseudo"
            type='text'
            name='pseudo'
            value={comment.pseudo || ""}
            onChange={handleChange}
            />
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    name='content'
                    value={comment.content || ""}
                    onChange={handleChange}
                    />
            </div>
            <div>
            <Button variant="contained" color='primary' type='submit' style={{cursor: 'pointer'}}>Envoyer</Button>
            </div>
        </form>
    );
}

export default FormComment;
