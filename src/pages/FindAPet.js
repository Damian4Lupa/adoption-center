import React, { Component } from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import '../styles/Pages.css'
import Slider from '../components/SliderSelectTypeOfPets'
import Rabbit from '../components/Rabbit'
// import Cat from '../components/'

class FindAPet extends Component {

  state = {
    breed: "",
    age: "",
    gender: "",
    goodWith: "",
    careAndBehavior: "",
    petName: "",
  }

  changeValue = event => {

    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })

  }

  render() {
    // console.log(this.state.breed)
    return (

      <Container>
        <Row>
          
          <Col sm={3} className="mt-4">

            <Slider />

            <div className="mb-5">
              <Rabbit />
            </div>

          </Col>

          <Col sm={9} className="mt-5">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

          </Col>
        </Row>
      </Container>


    );
  }
}

export default FindAPet;