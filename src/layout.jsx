import React from "react";
import App from "./App";
import Navbar from "../src/components/navbar"


function Layout () {

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<App />} path="/"></Route>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default Layout;