import React, { Component } from 'react'
import '../styles/Counter.css'

import handsHelping from '../images/website/hands-helping.svg'
import paw from '../images/website/paw.svg'
import home from '../images/website/home.svg'
import donate from '../images/website/donate.svg'

class Counter extends Component {
    state = {}
    render() {
        return (
            <div className="ts_counter p-0">
                <div className="container-fluid">
                    <div className="row facts-wrapper wow fadeInLeft text-center">
                        <div className="facts one col-md-3 col-sm-6">

                            <img src={paw} alt="paw" height="40" />
                            <div className="facts-num">
                                <span className="counter">1200</span>
                            </div>
                            <h3>Pets in the database</h3>
                        </div>

                        <div className="facts two col-md-3 col-sm-6">

                            <img src={home} alt="home" height="40" />
                            <div className="facts-num">
                                <span className="counter">1277</span>
                            </div>
                            <h3>Adopted pets</h3>
                        </div>

                        <div className="facts three col-md-3 col-sm-6">

                            <img src={donate} alt="donate" height="40" />
                            <div className="facts-num">
                                <span className="counter">869</span>
                            </div>
                            <h3>Donors</h3>
                        </div>

                        <div className="facts four col-md-3 col-sm-6">

                            <img src={handsHelping} alt="handsHelping" height="40" />
                            <div className="facts-num">
                                <span className="counter">76</span>
                            </div>
                            <h3>Volunteers</h3>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default Counter;