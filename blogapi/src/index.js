import React from 'react';
import {BrowserRouter ,Route ,Routes} from 'react-router-dom'
//import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import PageLayout from './components/layout';
import {createRoot} from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./components/header";
// import {Layout} from "./components/layout";
import theme from './components/theme';
import {ThemeProvider} from "@mui/material";

const rootElement = document.getElementById ( 'root' );
const root = createRoot ( rootElement ); // createRoot(container!) if you use TypeScript

root.render (
    <React.StrictMode>

        <BrowserRouter>
            <ThemeProvider theme={ theme }>
                <CssBaseline/>

                <Routes>
                    <Route path="/" element={ <PageLayout/> }>

                        <Route path="register" element={ <Register/> }/>
                        <Route path="login" element={ <Login/> }/>
                        <Route path="logout" element={ <Logout/> }/>
                        <Route path="/post/:slug" element={ <Single/> }/>
                        <Route index element={ <App/> }/>
                    </Route>
                </Routes>
                {/*<App/>*/ }
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:{ <App /> }
//   },
// ]);
//
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
//<div><App /></div>
// import DefaultComponent from 'components/DefaultComponent';
// import { Component } from 'react';
// import { createBrowserHistory as createHistory } from "history";
//
// const DebugRouter = ({ children }: React.PropsWithChildren<unknown>) => {
//   const { location } = useHistory()
//   if (process.env.NODE_ENV === "development") {
//     console.log(
//       `Route: ${location.pathname}${location.search}, State: ${JSON.stringify(
//         location.state,
//       )}`,
//     )
//   }
//
//   return children
// }
// const routing = (
// 	<DebugRouter>
// 	<BrowserRouter>
// 			<Header />
// 			<Routes>
// 				<Route exact path="/" element={<App />} />
// 			</Routes>
// 			<Footer />
// 	</BrowserRouter>
// 		</DebugRouter>
// );
//
// ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();