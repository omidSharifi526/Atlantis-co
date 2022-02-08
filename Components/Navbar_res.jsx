import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Image from 'next/image'


const Navbar_res = () => {
    return (
       <>
       
        <nav className="navbar fixed-top navbar-expand-md navbar-dark mnav m-navbar fs-6" style={{direction:'rtl'}}>
        <div className="container-fluid">
          
        <a className="navbar-brand  " href="#">Atlantis-Co</a>
        <Link href='/'><a > <Image src="/../public/asset/imgs/TlanLogo.png"  alt="Atlantis" width={80} height={50}/></a></Link>
         
          <button className="navbar-toggler fixed-buttom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
     
      


          <div className="collapse navbar-collapse  " style={{direction:'rtl'}} id="navbarSupportedContent">
            <ul className="navbar-nav custom-nav   mb-2 mb-lg-0">
              <li className="nav-item p-2 mt-2">
               <Link href='/'>
               <a className="nav-link active" aria-current="page">خانه</a>
               </Link>
              </li>
              <li className="nav-item p-2 mt-2">
              <Link href="/gallery">
              <a className="nav-link" >گالری محصولات</a>
              </Link>
              </li>
            
              <li className="nav-item p-2 mt-2">
               <Link href="/contactUs">
                 <a className="nav-link "  tabIndex="-1" aria-disabled="true">ارتباط با ما</a>
               </Link>
              </li>
              <li className="nav-item p-2 mt-2">
              <Link href="/aboutUs">
              <a className="nav-link "  tabIndex="-1" aria-disabled="true"> درباره ما</a>
              </Link>
              </li>
                
       
            </ul>
        
          </div>
      

       
        </div>
         
      </nav>
       </>
    )
}

export default Navbar_res
