import React from 'react';
import '../styles/Footer.css'

import envelope from '../images/website/envelope.svg'
import facebook from '../images/website/facebook.svg'
import google from '../images/website/google-plus.svg'
import phone from '../images/website/phone.svg'
import twitter from '../images/website/twitter.svg'
import youtube from '../images/website/youtube.svg'

const Footer = () => {

  return (

    <footer id="footer" class="footer-1 mt-5">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget subscribe no-box">
                <h5 class="widget-title mt-3">Adoption Center<span></span></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid repellat</p>
              </div>

              <button><img className="social" src={facebook} alt="facebook" width="30" /></button>
              <button><img src={twitter} alt="twitter" width="30" className="social" /></button>
              <button><img src={youtube} alt="youtube" width="30" className="social" /></button>
              <button><img src={google} alt="google" width="30" className="social" /></button>

            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title mt-3">Quick Links<span></span></h5>
                <ul class="thumbnail-widget">
                  <li>
                    <div class="thumb-content"><a href="#.">How we help</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="#.">Find a Pet</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="#.">Adoption info</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="#.">Pet Care & Health</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="#.">Get Involved</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="#.">Contact</a></div>
                  </li>

                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title mt-3">Get Started<span></span></h5>
                <p>Get access to your full Training and Marketing Suite.</p>
                <a class="btn" href="#." target="_blank">Register Now</a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">

              <div class="widget no-box">
                <h5 class="widget-title mt-3">Contact Us<span></span></h5>

                <p>Adopt Center Foundation,
                25 Lorem ipsum street,
               35-589 Lorem ipsum</p>

                <p><img src={envelope} alt="envelope" width="25" className="social mr-2" />info@adoptcenter.com</p>

                <p><img src={phone} alt="phone" width="25" className="social mr-2" />(541) 754-3010</p>

                <div class="social-footer2">


                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>Adoption Center © 2020. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer