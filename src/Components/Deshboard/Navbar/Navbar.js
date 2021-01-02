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
                            <a class="nav-link text-white" target="blank" href="https://www.traveldailynews.com/">News <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link text-white" target="blank" href="https://www.placepass.com/blog/best-travel-blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" target="blank" href="https://travel.usnews.com/rankings/worlds-best-vacations/">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" target="blank" href="https://www.linkedin.com/in/irfath-hossain-5616b61b1/">Contact</a>
                        </li>
                        <li class="nav-item">
                            <Link to ="/login"><button type="button" class="btn btn-warning">Log In</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      
    );
};

export default Navbar;