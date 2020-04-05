import React, { Component } from "react";
// import { Carousel } from 'react-bootstrap'
import "../styles/SliderTypeOfPets.css";
import $ from "jquery";

import dog from "../images/website/dog.png";
import cat from "../images/website/cat.png";
import rabbit from "../images/website/rabbit.png";
import next from "../images/website/angle-right.svg";
import prev from "../images/website/angle-left.svg";

class Slider extends Component {
  state = {
    id: 2,
    prevId: 1,
    selectPet: "dog",
  };

  componentDidUpdate(prevProps, prevState) {
    // let prevId = prevState.id;

    if (this.state.id != prevState.id) {
      this.changeSelectPet();
      this.setState({
        prevId: prevState.id,
      });
    }
  }

  changeSelectPet = () => {
    if (this.state.prevId + 1 === 2) {
      this.setState({
        selectPet: "cat",
      });
    } else if (this.state.prevId + 1 === 3) {
      this.setState({
        selectPet: "rabbit",
      });
    } else {
      this.setState({
        selectPet: "dog",
      });
    }
  };

  changeId = (event) => {
    event.preventDefault();
    let oldId = this.state.id;
    let newId = 1;
    let action = event.target.name;

    if (action === "subtract") {
      newId = oldId - 1;
      if (newId === 0) {
        newId = 3;
      }
    } else if (action === "add") {
      newId = oldId + 1;
      if (newId === 4) {
        newId = 1;
      }
    }

    // console.log(action)
    // console.log("oldId", oldId)
    // console.log("newId", newId)

    this.setState({
      id: newId,
    });
  };

  changeImg = () => {
    let id = this.state.id;
    let prevId = this.state.prevId;

    $(`.carousel-item:nth-of-type(${id})`).toggleClass("active");
    $(`.carousel-item:nth-of-type(${prevId})`).toggleClass("active");
  };

  changeItem = () => {
    let id = this.state.id;
    let prevId = this.state.prevId;

    $(`.carousel-indicators li:nth-child(${id})`).toggleClass("active");
    $(`.carousel-indicators li:nth-child(${prevId})`).toggleClass("active");
  };

  render() {
    return (
      <div className="carousel slide">
        <ol className="carousel-indicators" onChange={this.changeItem()}>
          <li className="active"></li>
          <li></li>
          <li></li>
        </ol>

        <div className="carousel-inner" onChange={this.changeImg()}>
          <div className="active carousel-item">
            <img className="d-block w-100 abc" src={dog} alt="dog" />
            <div className="carousel-caption">
              <h5>dog</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100 abc" src={cat} alt="cat" />
            <div className="carousel-caption">
              <h5>cat</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100 abc" src={rabbit} alt="rabbit" />
            <div className="carousel-caption">
              <h5>rabbit</h5>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          role="button"
          href="#"
          onClick={this.changeId}
        >
          <img name="subtract" src={prev} alt="next" className="w-50" />
        </a>

        <a
          className="carousel-control-next"
          role="button"
          href="#"
          onClick={this.changeId}
        >
          <img name="add" src={next} alt="next" className="w-50" />
        </a>
      </div>
    );
  }
}

export default Slider;
