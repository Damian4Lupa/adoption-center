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

                        <iframe className="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.106711,17.026858&output=embed"></iframe>

                    </Col>
                </Row>

                <h4 className="text-center adress mb-4">Write to us</h4>

                <Form className="writeToUs my-4">

                    <Form.Row>
                        <Col xs={5}>
                            <Form.Group className="ml-3 mt-3" controlId="email">
                                <Form.Control type="email" placeholder="email" />
                            </Form.Group>


                            <Form.Group className="ml-3 mt-3" controlId="subject">
                                <Form.Control type="text" placeholder="subject" />
                            </Form.Group>

                        </Col>
                        <Col xs={7}>

                            <Form.Group className="mr-3 mt-3" controlId="message">

                                <Form.Control className="message" placeholder="message" as="textarea" />

                            </Form.Group>

                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col sm={10}></Col>

                        <Col sm={2}>
                            <Form.Group controlId="button" className="mb-4 mt-2">
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


