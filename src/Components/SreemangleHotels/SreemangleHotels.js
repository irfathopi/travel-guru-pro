import React from 'react';
import Navbar from '../Deshboard/Navbar/Navbar';
import './SreemangleHotels.css';
import star from '../../Icon/star_1_.png'

const SreemangleHotels = () => {
    return (

        <div className ="background">
        <Navbar></Navbar>
        <div className="place">
            <h1>Stay in Sreemangle</h1>
            <h2 >252 stays Apr 13-17 3 guests</h2>
        </div>

        <div className ="row d-flex justify-content-around main__div ">
            <div className="left__side col-md-6 ">

                <div className="details row d-flex justify-content-around">
                    <div className="bedimg col-md-6">

                    </div>
                    <div className="col-md-6 all__details">
                        <h5>Light bright airy stylish apt & safe peacefull stay</h5>
                        <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                        <p><img src={star} alt=""/> 4.9 (20)..  $34/night.. </p>
                    </div>
                </div>



                <div className="details row d-flex justify-content-around">
                    <div className="bedimg2 col-md-6">

                    </div>
                    <div className="col-md-6 all__details">
                        <h5>Apartment in Lost Panorama</h5>
                        <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                        <p><img src={star} alt=""/> 4.9 (20)..  $34/night.. </p>
                    </div>

                </div>



                <div className="details row d-flex justify-content-around">
                    <div className="bedimg3 col-md-6">
                        

                    </div>
                    <div className="col-md-6 all__details">
                        <h5>AR Lounge & Pool (r&r + b&b)</h5>
                        <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                        <p><img src={star} alt=""/> 4.9 (20)..  $34/night.. </p>
                    </div>
                </div>

                

            </div>
            <div className="right__side col-md-4">
                <h5>Map Loading.....</h5>
            </div>
        </div>
        </div>
    );
};

export default SreemangleHotels;