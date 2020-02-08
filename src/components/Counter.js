import React, { Component } from 'react'
import '../styles/Counter.css'
import $ from 'jquery'

import handsHelping from '../images/website/hands-helping.svg'
import paw from '../images/website/paw.svg'
import home from '../images/website/home.svg'
import donate from '../images/website/donate.svg'

class Counter extends Component {
    state = {
        startCounter: false,
        endCounter: false,

        petsInDatabase: 0,
        adoptedPets: 0,
        donors: 0,
        volunteers: 0
    }


    counter_petsInDatabase = 0

    counter = () => {

        let petsInDatabase = 0
        // let adoptedPets = 0
        // let donors = 0
        // let volunteers = 0

        let petsInDatabaseMax = 1200
        // let adoptedPetsMax = 1277
        // let donorsMax = 869
        // let volunteersMax = 76

        if (this.counter_petsInDatabase <= petsInDatabaseMax) {
            this.counter_petsInDatabase = petsInDatabase + 10
            petsInDatabase = petsInDatabase + 10
            console.log(petsInDatabase)

            this.setState({
                petsInDatabase
            })
        }


    }

    checkScrollValue = () => {

        // $(document).ready(function () {
        //     let początek = $('.counter').offset().top
        //     let scrollValue = $(this).scrollTop();
        //     // console.log(scrollValue)

        //     if (scrollValue > początek) {
        //         console.log("działa")
        //         // this.counter()
        //     }
        // });

        let startCounter = $('.counter').offset().top
        let scrollValue = $(window).scrollTop();

        // console.log("startCounter:", startCounter, "||  scrollValue:", scrollValue)

        if (scrollValue >= startCounter) {
            console.log("startCounter: true")
            this.setState({
                startCounter: true
            })
        }


    }









    render() {

        const { startCounter, petsInDatabase, adoptedPets, donors, volunteers } = this.state

        // this.checkScrollValue()

        let checkScrollValue = setInterval(() => {
            this.checkScrollValue()
            // this.counter()
        }, 500);

        if (startCounter) {
            clearInterval(checkScrollValue)
            let startCounter = setInterval(() => {
                this.counter()
                // this.checkScrollValue()
            }, 500);




            // console.log("clearInterval(checkScrollValue)")
        }






        // setTimeout(() => {
        //     clearInterval(interval)
        //     console.log("koniec działania")
        // }, 2500);

        return (
            <div className="ts_counter p-0">
                <div className="container-fluid">
                    <div className="row facts-wrapper wow fadeInLeft text-center">
                        <div className="facts one col-md-3 col-sm-6">

                            <img src={paw} alt="paw" height="40" />
                            <div className="facts-num">
                                <span className="counter">{petsInDatabase}</span>
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