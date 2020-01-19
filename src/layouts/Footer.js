import React from 'react';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'

import envelope from '../images/website/envelope.svg'
import facebook from '../images/website/facebook.svg'
import google from '../images/website/google-plus.svg'
import phone from '../images/website/phone.svg'
import twitter from '../images/website/twitter.svg'
import youtube from '../images/website/youtube.svg'

const Footer = () => {

  return (

    <footer id="footer" className="footer-1 mt-5">
      <div className="main-footer widgets-dark typo-light">
        <Container>
          <Row>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title mt-3">Adoption Center<span></span></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid repellat</p>
              </div>

              <button className="btn btn-social"><img src={facebook} alt="facebook" width="30" className="social" /></button>
              <button className="btn btn-social"><img src={twitter} alt="twitter" width="30" className="social" /></button>
              <button className="btn btn-social"><img src={youtube} alt="youtube" width="30" className="social" /></button>
              <button className="btn btn-social">  <img src={google} alt="google" width="30" className="social" /></button>

            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title mt-3">Quick Links<span></span></h5>
                <ul className="thumbnail-widget">

                  <li>
                    <div className="thumb-content"><Link to="/">How we help</Link></div>
                  </li>
                  <li>
                    <div className="thumb-content"><Link to="/FindAPet">Find a Pet</Link></div>
                  </li>
                  <li>
                    <div className="thumb-content"><Link to="/AdoptionInfo">Adoption info</Link></div>
                  </li>
                  <li>
                    <div className="thumb-content"><Link to="/PetCareAndHealth">Pet Care & Health</Link></div>
                  </li>
                  <li>
                    <div className="thumb-content"><Link to="/GetInvolved">Get Involved</Link></div>
                  </li>
                  <li>
                    <div className="thumb-content"><Link to="/Contact">Contact</Link></div>
                  </li>

                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title mt-3">Get Started<span></span></h5>
                <p>Get access to your full Training and Marketing Suite.</p>

                <button className="btn btn-register mt-2">Register Now</button>

              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">

              <div className="widget no-box">
                <h5 className="widget-title mt-3">Contact Us<span></span></h5>

                <p>Adopt Center Foundation, 25 Lorem ipsum street, 35-589 Lorem ipsum</p>

                <p><img src={envelope} alt="envelope" width="25" className="social mr-2" />info@adoptcenter.com</p>

                <p><img src={phone} alt="phone" width="25" className="social mr-2" />(541) 754-3010</p>

                <div className="social-footer2">


                </div>
              </div>
            </div>

          </Row>
        </Container>
      </div>

      <div className="footer-copyright">
        <Container>
          <Row>
            <div className="col-md-12 text-center">
              <p>Adoption Center © 2020. All rights reserved.</p>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer