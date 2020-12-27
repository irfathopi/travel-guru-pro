import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Deshboard/Navbar/Navbar';
import './SreemangleDetails.css';

const SreemangleDetails = () => {
    return (
        <div className="sreemangle">
            <Navbar></Navbar>


            <div className="srimangledetails row d-flex justify-content-around ">
                <div className="discription col-md-5 ">
                    <h1>SREEMANGLE</h1>
                    <p>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur.</p>
                </div>
                <div className="booking__form col-md-5">
                    <div class="card text-center">
                        <div class="card-body">
                            <label className ="label">Origin</label>
                            <input class="form-control" type="text" defaultValue="Dhaka" readonly/>
                                <br/>
                            <label className ="label">Destinition</label>
                            <input class="form-control" type="text" defaultValue="Sreemangle" readonly/>

                            <br/>
                            <label className ="label">From</label>
                            <input class="form-control" type="date" readonly/>

                            <br/>
                            <label className ="label">To</label>
                            <input class="form-control" type="date" readonly/>

                            <br/>


                            <Link to="/sreemanglehotels"><button type="button" class="btn btn-warning btn-lg btn-block">Start Booking</button></Link>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SreemangleDetails;