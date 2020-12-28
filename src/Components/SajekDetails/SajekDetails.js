import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Deshboard/Navbar/Navbar';
import './SajekDetails.css';

const SajekDetails = () => {
    return (
        <div className="sreemangle">
            <Navbar></Navbar>


            <div className="srimangledetails row d-flex justify-content-around ">
                <div className="discription col-md-5 ">
                    <h1>SAJEK</h1>
                    <p>Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district, it is situated 67 kilometres (42 mi) north-east from Khagrachhari town and 95 kilometres (59 mi) north from Rangamati city. The border of Bangladesh and Mizoram of India is 8 kilometres (5.0 mi) east from Sajek.</p>
                </div>
                <div className="booking__form col-md-5">
                    <div class="card text-center">
                        <div class="card-body">
                            <label className ="label">Origin</label>
                            <input class="form-control" type="text" defaultValue="Dhaka" readonly/>
                                <br/>
                            <label className ="label">Destinition</label>
                            <input class="form-control" type="text" defaultValue="Sajek" readonly/>

                            <br/>
                            <label className ="label">From</label>
                            <input class="form-control" type="date" readonly/>

                            <br/>
                            <label className ="label">To</label>
                            <input class="form-control" type="date" readonly/>

                            <br/>

                            <Link to="/sajekhotels"><button type="button" class="btn btn-warning btn-lg btn-block">Start Booking</button></Link>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SajekDetails;