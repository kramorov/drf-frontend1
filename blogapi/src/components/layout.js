import {Outlet} from "react-router-dom";
import Header from './header';
import Footer from './footer';

const PageLayout = () => {
    return (<>
            <header>
                <Header/>
            </header>
            <Outlet/>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default PageLayout