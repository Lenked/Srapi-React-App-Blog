import { Box, Skeleton } from '@mui/material';
import React from 'react';

const PostsContentLoader = () => {
    return (
        <Box>
            <Skeleton variant='rect' width={210} height={118} />
            <Skeleton width="60%" />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </Box> 
    );
}

export default PostsContentLoader;
