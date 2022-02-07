import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Navbar_res from './Navbar_res';



const Layout = ({children}) => {
    return (
        <>
            <Navbar_res/>
            {children}
            <Footer/>
            
        </>
    )
}

export default Layout
