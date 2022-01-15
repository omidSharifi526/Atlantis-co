import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Navbar_res from './Navbar_res';
import StdNavbar from './StdNavbar';


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
