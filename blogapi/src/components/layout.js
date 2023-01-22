import {Outlet} from "react-router-dom";
import Header from './header';
import Footer from './footer';

const PageLayout = () => {
    return ( <>
            {/*<Header/>*/ }
            <Outlet/>
            <Footer/>
        </>
    )
}

export default PageLayout