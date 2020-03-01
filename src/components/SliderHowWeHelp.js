import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../styles/SliderHowWeHelp.css";

import FindAPet from "../images/website/HowWeHelp/FindAPet.jpg";
import HowWeHelp from "../images/website/HowWeHelp/HowWeHelp.jpg";
import PetCare from "../images/website/HowWeHelp/PetCare.jpg";

class SliderHowWeHelp extends Component {
  state = {};
  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-pointer">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1" className=""></li>
          <li data-target="#myCarousel" data-slide-to="2" className=""></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={HowWeHelp} width="100%" height="500" alt="" />
          </div>

          <Container>
            <div className="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#" role="button">
                  Sign up today
                </a>
              </p>
            </div>
          </Container>
          <div className="carousel-item">
            <img src={FindAPet} width="100%" height="500" alt="" />

            <Container>
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#" role="button">
                    Learn more
                  </a>
                </p>
              </div>
            </Container>
          </div>
          <div className="carousel-item">
            <img src={PetCare} width="100%" height="500" alt="" />

            <Container>
              <div className="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#" role="button">
                    Browse gallery
                  </a>
                </p>
              </div>
            </Container>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default SliderHowWeHelp;
