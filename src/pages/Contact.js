import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../styles/Pages.css'

import home from '../images/website/home.svg'
import phone from '../images/website/phone.svg'
import envelope from '../images/website/envelope.svg'
import skype from '../images/website/skype.svg'

class Contact extends Component {
    state = {}



    render() {
        return (
            <Container>

                <Row>

                    <Col sm={3} className="adress">

                        <img src={home} alt="home" height="25" />
                        <p>Adopt Center Foundation</p>
                        <p>Lorem ipsum street 25</p>
                        <p>35-589 Lorem ipsum</p>

                        <br />

                        <img src={phone} alt="phone" height="25" />
                        <p>(541) 754-3010</p>

                        <br />

                        <img src={envelope} alt="envelope" height="25" />
                        <p>info@adoptcenter.com</p>

                        <br />

                        <img src={skype} alt="skype" height="25" />
                        <p>AdoptionCenter</p>

                    </Col>
                    <Col sm={9} className="mt-5">

                        <div id="map" />

                    </Col>
                </Row>

                <h4 className="text-center mt-5 mb-2">Write to us</h4>

                <Form className="my-4">

                    <Form.Row>
                        <Col xs={6}>
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="email" />
                            </Form.Group>


                            <Form.Group controlId="subject">

                                <Form.Control type="text" placeholder="subject" />
                            </Form.Group>

                        </Col>
                        <Col xs={6}>

                            <Form.Group controlId="message">

                                <Form.Control placeholder="message" as="textarea" rows="3" />

                            </Form.Group>

                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col sm={10}></Col>

                        <Col sm={2}>
                            <Form.Group controlId="button" className="mb-5 mt-2">
                                <Button variant="outline-primary" className="mr-3">Clear</Button>
                                <Button variant="primary" type="submit" >Submit</Button>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Form>

            </Container>
        );
    }
}

export default Contact;


