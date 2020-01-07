import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import '../styles/Slider.css'
import dog from '../images/dog.png'
import cat from '../images/cat.png'
import rabbit from '../images/rabbit.png'
import next from "../images/icons/angle-right.svg"
import prev from "../images/icons/angle-left.svg"


class Slider extends Component {

  render() {

    return (

      // <Carousel>

      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100 abc"
      //       src={dog}
      //       alt="dog"
      //     />
      //     <Carousel.Caption>
      //       <h5>Dog</h5>

      //     </Carousel.Caption>
      //   </Carousel.Item>

      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100 abc"
      //       src={cat}
      //       alt="cat"
      //     />

      //     <Carousel.Caption>
      //       <h5>cat</h5>

      //     </Carousel.Caption>
      //   </Carousel.Item>

      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100 abc"
      //       src={rabbit}
      //       alt="rabbit"
      //     />

      //     <Carousel.Caption>
      //       <h5>rabbit</h5>

      //     </Carousel.Caption>
      //   </Carousel.Item>
      // </Carousel>

      <div class="carousel slide">
        <ol class="carousel-indicators">
          <li></li>
          <li class="active"></li>
          <li></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              class="d-block w-100 abc"
              src={dog}
              alt="dog"
            />

            <div class="carousel-caption">
              <h5>Dog</h5>
            </div>
          </div>

          <div class="active carousel-item">
            <img
              class="d-block w-100 abc"
              src={cat}
              alt="cat"
            />
            <div class="carousel-caption">
              <h5>cat</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 abc"
              src={rabbit}
              alt="rabbit"
            />
            <div class="carousel-caption">
              <h5>rabbit</h5>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" role="button" href="#">
          {/* <span aria-hidden="true" class="carousel-control-prev-icon">
          </span>
          <span class="sr-only">Previous</span> */}
            <img
            src={prev}
            alt="next"
            class="w-50"
          />
        </a>

        <a class="carousel-control-next" role="button" href="#">
          {/* <span aria-hidden="true" class="carousel-control-next-icon">
          </span> */}
          <img
            src={next}
            alt="next"
            class="w-50"
          />
          {/* <span class="sr-only">Next</span> */}
        </a>

      </div>




    )
  }
}

export default Slider