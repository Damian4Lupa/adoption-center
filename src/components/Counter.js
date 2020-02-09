import React, { Component } from 'react'
import '../styles/Counter.css'
import $ from 'jquery'
import CountUp from 'react-countup';

import handsHelping from '../images/website/hands-helping.svg'
import paw from '../images/website/paw.svg'
import home from '../images/website/home.svg'
import donate from '../images/website/donate.svg'

class Counter extends Component {
    state = {
        startCounter: false
    }

    checkScrollValue = () => {

        let startCounter = $('.ts_counter').offset().top - 600
        let scrollValue = $(document).scrollTop();
        let endCounter = $('.ts_counter').offset().top + 100

        if (scrollValue >= startCounter && scrollValue <= endCounter) {

            this.setState({
                startCounter: true
            })
        }
    }

    render() {

        const { startCounter } = this.state

        if (!startCounter) {
            setInterval(() => {
                this.checkScrollValue()
            }, 500);
        }

        let petsInDatabase = startCounter ? <CountUp end={1278} /> : 0
        let adoptedPets = startCounter ? <CountUp end={5987} /> : 0
        let donors = startCounter ? <CountUp end={786} /> : 0
        let volunteers = startCounter ? <CountUp end={76} /> : 0

        return (
            <div className="ts_counter p-0">
                <div className="container-fluid">
                    <div className="row facts-wrapper wow fadeInLeft text-center">
                        <div className="facts one col-md-3 col-sm-6">

                            <img src={paw} alt="paw" height="40" />
                            <div className="facts-num">
                                <span className="counter">  {petsInDatabase}</span>

                            </div>
                            <h3>Pets in the database</h3>
                        </div>

                        <div className="facts two col-md-3 col-sm-6">

                            <img src={home} alt="home" height="40" />
                            <div className="facts-num">
                                <span className="counter">{adoptedPets}</span>
                            </div>
                            <h3>Adopted pets</h3>
                        </div>

                        <div className="facts three col-md-3 col-sm-6">

                            <img src={donate} alt="donate" height="40" />
                            <div className="facts-num">
                                <span className="counter">{donors}</span>
                            </div>
                            <h3>Donors</h3>
                        </div>

                        <div className="facts four col-md-3 col-sm-6">

                            <img src={handsHelping} alt="handsHelping" height="40" />
                            <div className="facts-num">
                                <span className="counter">{volunteers}</span>
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