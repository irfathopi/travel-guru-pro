import React from 'react';
import './Navbar.css'
import logo from '../../../Icon/Logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav class=" navbar-expand-lg navbar-light navabr">
            <div className="navbar">
                <Link to="/"><img className="nav__logo" src={logo} alt="logo"/></Link>
                <button class="navbar-toggler hambar__icon" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse items " id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                                <input class="form-control mr-sm-3 " type="search" placeholder="Search" aria-label="Search"/>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#">News <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-warning">Log In</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      
    );
};

export default Navbar;