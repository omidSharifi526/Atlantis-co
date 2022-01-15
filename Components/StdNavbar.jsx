import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
const StdNavbar = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='head-left'>
                    <a href="#">Logo</a>
                </div>
                <div className='head-right'>
                    <nav className='main-nav'>
                        <ul>
                            <li>
                                <a href="#">home</a>
                            </li>
                            <li>
                                <a href="#">about</a>
                               
                            </li>
                            <li>
                                <a href="#">Service</a>
                                <i className="fas fa-chevron-down fs-6 text-light"></i>

                                <ul>
                                    <li><a href="#">web developer</a></li>
                                    <li><a href="#">web desiginer</a></li>
                                    <li><a href="#">web Oops</a>
                                    <i className="fas fa-chevron-down fs-6 text-light"></i>
                                    <ul>
                                <li><a href="#">use</a></li>
                                <li><a href="#">wecare</a></li>
                                <li><a href="#">test</a></li>
                                <li><a href="#">symbol</a>
                                <i className="fas fa-chevron-down fs-6 text-light"></i>
                                <ul>
                                    <li><a href="#">web developer</a></li>
                                    <li><a href="#">web desiginer</a></li>
                                    <li><a href="#">web Oops</a></li>
                                </ul>
                                
                                
                                </li>
                                </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Gallery</a>
                                
                            </li>
                            <li>
                                <a href="#">fqa</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default StdNavbar
