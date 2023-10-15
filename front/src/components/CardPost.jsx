import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_URL } from '../config';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function CardPost({post}) {

  return (
    <Grid item>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={post.image !== null ? API_URL + post.image.formats.small.url : "..."}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                { post.content.substring(0, 100)} ...
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/post/${post.id}`}>
                    <Button size="small">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    </Grid>
  );
}
