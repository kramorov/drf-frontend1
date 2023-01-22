import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {MenuIcon} from '@mui/icons-material'

import CssBaseline from '@mui/material/CssBaseline';

// function Header(props) {
//   return (
//     <div className="header">
//       <h1>{props.title}</h1>
//       <p>{props.subtitle}</p>
//     </div>
//   );
// }
function Header (props) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Box sx={ {flexGrow: 1} }>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={ {mr: 2} }
                        >

                        </IconButton>
                        <Typography variant="h6" component="div" sx={ {flexGrow: 1} }>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <h1>{ props.title }</h1>
            <p>{ props.subtitle }</p>
        </React.Fragment>
    );
}

// function Header(props) {
// 	const classes = useStyles();
// 	return (
// 		<React.Fragment>
// 			<CssBaseline />
// 			<AppBar
// 				position="static"
// 				color="white"
// 				elevation={0}
// 				className={classes.appBar}
// 			>
// 				<Toolbar>
// 					<Typography variant="h6" color="inherit" noWrap>
// 						BlogmeUp
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 		</React.Fragment>
// 	);
// }

export default Header;