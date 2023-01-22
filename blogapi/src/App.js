import React ,{useMemo ,useState} from 'react';
import {ThemeProvider as MuiThemeProvider ,StylesProvider} from '@material-ui/core/styles';
import {ThemeProvider ,useTheme} from '@emotion/react';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';
import theme from "./components/StylerUseClasses";


function App () {
    const PostLoading = PostLoadingComponent ( Posts );
    const [appState ,setAppState] = useState ( {
        loading: false ,
        posts: null ,
    } );

    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={ theme }>
                <ThemeProvider theme={ theme }>
                    <div className="App">
                        <Header title="My header222" subtitle="subtitle2"/>
                        <MainLogo message="My content"/>
                        <h1>Latest Posts</h1>
                        <PostLoading isLoading={ appState.loading } posts={ appState.posts }/>
                        <Footer/>

                    </div>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
}

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
//
// import { makeStyles } from '@material-ui/core/styles';
//
// const useStyles = makeStyles((theme) => ({
// 	appBar: {
// 		borderBottom: `1px solid ${theme.palette.divider}`,
// 	},
// }));
//
// // class connectionExample extends React.Component{
// // 	componentDidMount() {const apiUrl ='http://127.0.0.1:8000/api/';
// // 		fetch(apiUrl)
// // 			.then((response)=>response.json())
// // 			.then((data)=>console.log(data));
// // 	}
// // 	render() {
// // 		return <div> Example connection</div>;
// // 	}
// // }
// //
// // export default connectionExample;
//
// function App() {
// 	return (
// 		<div className="App">
// 			<Header title="My header222" subtitle="subtitle2" />
// 			<Main_logo message="My content" />
// 			<Footer />
// 		</div>
// 	)
// }
function MainLogo (props) {
    return (
        <div className="main_logo">
            <img src={ logo } className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

//
// export default App;
//
