import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
//import postClasses from "./StylerUseClasses";


// const TheComponent = () => {
//     const classes = useClasses ( styles ); // useStyles from custom hook
// }


const Posts = (props) => {
    const {posts} = props;
    // const classes = useStyles ();
    // const classes = useClasses( styles ); // useStyles from custom hook
    //const classes = postClasses;
    // console.log("Количество постов ={posts.length}")

    if (!posts) {
        console.log ( 'Постов не обнаружено!' );
        return ( <p>Постов не обнаружено!</p> );
    }
    ;
    if (posts.length === 0) {
        console.log ( 'Длина списка постов равна 0' );
        return ( <p>Длина списка постов равна 0</p> );
    }
    ;
    console.log ( 'Проехали дальше' );
    console.log ( posts.length )
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={ 5 } alignItems="flex-end">
                    { posts.map ( (post) => {
                        return (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={ post.id } xs={ 12 } md={ 4 }>
                                <Card sx={ {maxWidth: 345 ,border: 2} }>
                                    <CardMedia
                                        component="img"
                                        sx={ {height: 140} }
                                        // className='classes.cardMedia'
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className='cardContent'>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h2"
                                            className='postTitle'
                                        >
                                            { post.title.slice ( 0 ,50 ) }...
                                        </Typography>
                                        <div className='postText'>
                                            <Typography
                                                component="p"
                                                color="textPrimary"
                                            ></Typography>
                                            <Typography variant="p" color="textSecondary">
                                                { post.excerpt.slice ( 0 ,60 ) }...
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    } ) }
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default Posts;

/*
const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));*/
