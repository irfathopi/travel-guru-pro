import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Deshboard/Navbar/Navbar';
import './ShundarbanDetails.css';

const ShundarbanDetails = () => {
    return (
        <div className ="sreemangle">
            <Navbar></Navbar>


            <div className="srimangledetails row d-flex justify-content-around ">
                <div className="discription col-md-5 ">
                    <h1>SHUNDARBAN</h1>
                    <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. </p>
                </div>
                <div className="booking__form col-md-5">
                    <div class="card text-center">
                        <div class="card-body">
                            <label className="label">Origin</label>
                            <input class="form-control" type="text" defaultValue="Dhaka" readonly />
                            <br />
                            <label className="label">Destinition</label>
                            <input class="form-control" type="text" defaultValue="Shundarban" readonly />

                            <br />
                            <label className="label">From</label>
                            <input class="form-control" type="date"readonly />

                            <br />
                            <label className="label">To</label>
                            <input class="form-control" type="date" readonly />

                            <br />

                            <Link to="shundarbanhotels"><button type="button" class="btn btn-warning btn-lg btn-block">Start Booking</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShundarbanDetails;