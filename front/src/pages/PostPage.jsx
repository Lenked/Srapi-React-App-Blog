import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../config';
import { Button, Grid, Skeleton } from '@mui/material';
import { AiFillCaretLeft } from 'react-icons/ai'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { findOne, getComments } from '../services/postAPI';
import FormComment from '../components/forms/FormComment';

const Post = () => {

    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        fetchPost()
        fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchPost = async () => {
        findOne(id).then(data => {
            setPost(data)
            setIsLoading(true)
        })
    }

    const fetchComments = async () => {
        try{
            const data = await getComments(id)
            setComments(data)
        } catch (err){
             console.log(err)
        }
    }

    return (
        <div>
            <nav>
               <Link to={'/'}>
                    <Button variant='contained' color='primary'>
                        <AiFillCaretLeft />
                        <span>Back</span>
                    </Button>
               </Link>
            </nav>
            <Grid container spacing={2}>
                <Grid item sm="6">
                    <div className='postImg'>
                        {
                            isLoading ? 
                            <img src={`${API_URL + post.image.formats.small.url}`} alt={API_URL + post.image.name} />
                            : <Skeleton variant='rect' width={'100%'} height={400} />
                        }
                    </div>
                </Grid>
                <Grid item sm="6">
                    <h1>{isLoading ? post.title : <Skeleton variant='text' width={300} height={80} />}</h1>
                    <p>
                        {
                            isLoading ? post.content : 
                            <>
                                <Skeleton variant='text' />
                                <Skeleton variant='text' />
                                <Skeleton variant='text' />
                                <Skeleton variant='text' />
                                <Skeleton variant='text' />
                                <Skeleton variant='text' />
                            </>
                        }
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                   <Grid item md={6}>
                     <FormComment fetchComments={fetchComments} id={id} />
                   </Grid>
                   <Grid item md={6}>
                     <List>
                        {
                            comments.map(comment => {
                                return(
                                    <ListItem alignItems="flex-start" key={comment.id}>
                                        <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={comment.pseudo}
                                        secondary={
                                            <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                    {comment.content}
                                            </Typography>
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                )
                            })
                        }
                     </List>
                   </Grid>
            </Grid>
        </div>
    );
}

export default Post;
