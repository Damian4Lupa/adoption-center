import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Pages.css'

import home from '../images/website/home.svg'
import phone from '../images/website/phone.svg'

class Contact extends Component {
    state = {}



    render() {
        return (
            <Container>

                <Row>

                    <Col sm={3} className="mt-5 adres">

                        <img src={home} alt="home" height="25" />
                        <p>Adopt Center Foundation</p>
                        <p>Lorem ipsum street 25</p>
                        <p>35-589 Lorem ipsum</p>

                        <br />

                        <img src={phone} alt="phone" height="25" />
                        <p>(541) 754-3010</p>

                    </Col>



                    <Col sm={9} className="mt-5">


                        <div id="map" />





                    </Col>
                </Row>

                <div className="mt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>
                </div>




            </Container>
        );
    }
}

export default Contact;


