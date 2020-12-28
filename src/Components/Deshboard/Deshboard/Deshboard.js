import React from 'react';
import './Deshboard.css';
import Navbar from '../Navbar/Navbar';
import Hotels from '../Hotels/Hotels';


const Deshboard = () => {
    return (
        <div className ="deshboard__img">
            <Navbar/>
            <Hotels/>
            
        </div>
    );
};

export default Deshboard;