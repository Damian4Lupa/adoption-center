import React from 'react';
import { Container, Row } from 'react-bootstrap'
import Slider from '../components/SliderHowWeHelp'
import Counter from '../components/Counter'
import '../styles/Pages.css'

import test from '../images/testSlider.png'
import testFoto from '../images/team.jpg'

const HowWeHelp = () => {

    return (
        <>


            <div className="mt-0">
                <Slider />
            </div>


            <Container>

                <section className="marketing">

                    <Row>

                        <div className="col-lg-4">

                            <img src={test} alt="" height="70" />

                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>

                        </div>

                        <div className="col-lg-4">

                            <img src={test} alt="" height="70" />

                            <h2>Heading</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>

                        </div>

                        <div className="col-lg-4">

                            <img src={test} alt="" height="70" />

                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

                        </div>
                    </Row>
                </section>

            </Container>

            <div className="mt-5">

                <Counter />

            </div>

            <section className="showcase">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">

                        <div className="col-lg-6 order-lg-2 text-white showcase-img test"></div>

                        <div className="col-6 order-lg-1 my-auto showcase-text">
                            <h2>Fully Responsive Design</h2>
                            <p className="lead">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6 text-white showcase-img test"></div>
                        <div className="col-lg-6 my-auto showcase-text">
                            <h2>Updated For Bootstrap 4</h2>
                            <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6 order-lg-2 text-white showcase-img test" ></div>
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Easy to Use &amp; Customize</h2>
                            <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team text-center bg-light">
                <Container>
                    <h2 className="mb-5">Our team</h2>
                    <Row>
                        <div className="col">
                            <div className="team-item mx-auto mb-5 mb-lg-0">
                                <img className="img-fluid rounded-circle mb-3" src={testFoto} alt="" />
                                <h5>Margaret E.</h5>
                                <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-item mx-auto mb-5 mb-lg-0">
                                <img className="img-fluid rounded-circle mb-3" src={testFoto} alt="" />
                                <h5>Fred S.</h5>
                                <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-item mx-auto mb-5 mb-lg-0">
                                <img className="img-fluid rounded-circle mb-3" src={testFoto} alt="" />
                                <h5>Sarah W.</h5>
                                <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-item mx-auto mb-5 mb-lg-0">
                                <img className="img-fluid rounded-circle mb-3" src={testFoto} alt="" />
                                <h5>Sarah W.</h5>
                                <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                            </div>
                        </div>

                    </Row>
                </Container>

            </section>

        </>
    );
}

export default HowWeHelp;