import React, { Component } from 'react';
// import test from '../images/test2.png'
import '../styles/Slider.css'
import dog from '../images/dog.png'
import cat from '../images/cat.png'
import rabbit from '../images/rabbit.png'


class Slider extends Component {

  render() {

    return (

      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={cat} class="d-block w-100 abc" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Cat</h5>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={dog} class="d-block w-100 abc" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Dog</h5>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={rabbit} class="d-block w-100 abc" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Rabbit</h5>
              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    )
  }
}

export default Slider