import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import CardPost from '../components/CardPost';
import { findAll } from '../services/postAPI';
import PostsContentLoader from '../components/loaders/PostsContentLoader';

const Posts = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const fetchAllPosts = async () => {
        const data = await findAll()
        setPosts(data)
        setIsLoading(false)
    }

    return (
        <div>
            <h1>Liste des articles</h1>
            <Grid container spacing={3}>
                {isLoading ?
                    <PostsContentLoader />
                 : posts.map(post => <CardPost post={post} key={post.id} />)}
            </Grid>
        </div>
    );
}

export default Posts;
