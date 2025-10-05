import React, { Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../routers/Routers';
import ScrollToTop from '../ScrollToTop';

function Layout() {
    return (
        <Router>
            <ScrollToTop />
            <Fragment>
                <Header />
                <div>
                    <Routers />
                </div>
                <Footer />
                {/* Fixed call button */}
             
            </Fragment>
        </Router>
    );
}

export default Layout;
