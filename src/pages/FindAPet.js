import React, { Component } from 'react';
import { Row, Col, Container, Form, InputGroup, Button, FormControl } from 'react-bootstrap'
import '../styles/pages.css'
import Slider from '../components/SliderSelectTypeOfPets'

class FindAPet extends Component {


  render() {

    return (

      <Container>

        <Row>
          <Col sm={3} className="mt-4 mb-4">

            {/* <Form.Group as={Row} controlId="selectType">
              <Form.Label column sm="6">
                I would like to adopt a
              </Form.Label>
              <Col sm="4">
                <Form.Control as="select">
                  <option>cat</option>
                  <option>dog</option>
                  <option>rabbit</option>
                </Form.Control>
              </Col>
            </Form.Group> */}

            <Slider />



          </Col>

        </Row>

        <Row>

          <Col sm={3}>

            <Form>

              <Form.Group className="aaa" controlId="breed">
                <Form.Label>BREED</Form.Label>
                <Form.Control as="select">
                  <option>American</option>
                  <option>Bunny Rabbit</option>
                  <option>Dutch</option>
                  <option>Dwarf</option>
                  <option>English Spot</option>
                  <option>Lionhead</option>
                  <option>New Zealand</option>
                  <option>Rex</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="aaa" controlId="age">
                <Form.Label>AGE</Form.Label>
                <Form.Control as="select">
                  <option>Baby</option>
                  <option>Young</option>
                  <option>Adult</option>
                  <option>Senior</option>

                </Form.Control>
              </Form.Group>

              <Form.Group className="aaa" controlId="gender">
                <Form.Label>GENDER</Form.Label>
                <Form.Control as="select">
                  <option>Male</option>
                  <option>Female</option>

                </Form.Control>
              </Form.Group>

              <Form.Group className="aaa" controlId="goodWith">
                <Form.Label>GOOD WITH</Form.Label>
                <Form.Control as="select">
                  <option>Kids</option>
                  <option>Dogs</option>
                  <option>Cats</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="aaa" controlId="careAndBehavior">
                <Form.Label>CARE & BEHAVIOR</Form.Label>
                <Form.Control as="select">
                  <option>House-trained</option>
                  <option>Special Needs</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="aaa" controlId="petName">
                <Form.Label>PET NAME</Form.Label>
                <InputGroup className="mb-3" >
                  <FormControl

                    id="pet-name"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" className="bbb" />
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>





            </Form>

          </Col>
          <Col sm={9}>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>



            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

          </Col>
        </Row>












        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

      </Container>


    );
  }
}

export default FindAPet;