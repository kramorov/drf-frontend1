import React ,{useState} from 'react';
import axiosInstance from '../axios';
import {useNavigate} from 'react-router-dom';
//MaterialUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';

/*const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));*/

export default function Login () {
    const navigate = useNavigate ();
    const initialFormData = Object.freeze ( {
        email: '' ,
        password: '' ,
    } );

    const [formData ,updateFormData] = useState ( initialFormData );

    const handleChange = (e) => {
        updateFormData ( {
            ...formData ,
            [e.target.name]: e.target.value.trim () ,
        } );
    };

    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log ( formData );

        axiosInstance
            .post ( `token/` ,{
                email: formData.email ,
                password: formData.password ,
            } )
            .then ( (res) => {
                localStorage.setItem ( 'access_token' ,res.data.access );
                localStorage.setItem ( 'refresh_token' ,res.data.refresh );
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem ( 'access_token' );
                navigate ( '/' ,{replace: true} );
                //console.log(res);
                //console.log(res.data);
            } );
    };

    // const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className='paper'>
                <Avatar className='avatar'></Avatar>
                <Typography component="h1" variant="h5">
                    Войти
                </Typography>
                <form className='form' noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={ handleChange }
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={ handleChange }
                    />
                    <FormControlLabel
                        control={ <Checkbox value="remember" color="primary"/> }
                        label="Запомнить меня"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='submit'
                        onClick={ handleSubmit }
                    >
                        Войти в систему
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                { "Нет аккаунта? Зарегистрируйтесь" }
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}