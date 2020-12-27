import React from 'react';
import './Hotels.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Hotels = () => {
    return (
        <div className ="Hotels__maindiv  row d-flex justify-content-around">
            <div className="details__part text-white col-md-4">
                <h1>COX'S BAZAR</h1>
                <p>From the early 9th century the greater Chittagong area, including Cox's Bazar, was under the rule of Arakan kings until its conquest by the Mughals in 1666 AD.</p>
                <button type="button" class="btn btn-warning">Booking <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
            <div className="hotels__div col-md-7 row d-flex justify-content-around">

                <Link to= "/sreemangle">
                    <div className="min__divs main__divs1 ">
                         <h2>Sreemangal</h2>
                    </div>
                </Link>

               
                <Link to= "/shundarban">
                    <div className="min__divs main__divs2">
                        <h2>Shundarban</h2>
                    </div>
                </Link>
                
                <Link to="/sajek">
                    <div className="min__divs main__divs3">
                        <h2>Sajek</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Hotels;