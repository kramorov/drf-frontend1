import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Copyright () {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © ' }
            <Link color="inherit" href="https://material-ui.com/">
                Sergey Kramorov
            </Link>{ ' ' }
            { new Date ().getFullYear () }
            { '.' }
        </Typography>
    );
}

const footers = [
    {
        title: 'Company' ,
        description: ['Team' ,'History' ,'Contact us' ,'Locations'] ,
    } ,
    {
        title: 'Features' ,
        description: [
            'Cool stuff' ,
            'Random feature' ,
            'Team feature' ,
            'Developer stuff' ,
            'Another one' ,
        ] ,
    } ,
    {
        title: 'Resources' ,
        description: [
            'Resource' ,
            'Resource name' ,
            'Another resource' ,
            'Final resource' ,
        ] ,
    } ,
    {
        title: 'Legal' ,
        description: ['Privacy policy' ,'Terms of use'] ,
    } ,
];

function Footer () {

    return (
        <React.Fragment>
            <Container sx={ {width: '100%' ,position: 'fixed' ,bottom: 0} } component="footer" className='footer'>
                <Grid container spacing={ 4 } display="flex" justify="space-evenly">
                    { footers.map ( (footer) => (
                        <Grid item xs={ 6 } sm={ 3 } key={ footer.title }>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                { footer.title }
                            </Typography>
                            <ul>
                                { footer.description.map ( (item) => (
                                    <li key={ item }>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            { item }
                                        </Link>
                                    </li>
                                ) ) }
                            </ul>
                        </Grid>
                    ) ) }
                </Grid>
                <Box mt={ 5 }>
                    <Copyright/>
                </Box>;
            </Container>
        </React.Fragment>
    );
}

export default Footer;