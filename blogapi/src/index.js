import React from 'react';
//import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
//import { BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom' //"react-dom/client";
import App from './App';

import {createRoot} from 'react-dom/client';

const container = document.getElementById ( 'root' );
const root = createRoot ( container ); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);

// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//                 <App />
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// )
root.render (
    <React.StrictMode>
        <BrowserRouter>
            <App/>
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