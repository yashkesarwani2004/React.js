import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";

function Layout(){
    return(
        <>
        <Header />
        <Outlet /> {/*isko bich me rakha kyuki bich vala chnage hoga kabhi home to kabhi kuch*/}
        <Footer />
        </>
    )
}

export default Layout