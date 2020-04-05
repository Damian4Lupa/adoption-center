import React, { Component } from 'react';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap'
import '../styles/Pages.css'

class Rabbit extends Component {

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
    return (

      <Form controlId="rabbit">

        <Form.Group className="aaa" controlId="breed">
          <Form.Label>BREED</Form.Label>
          <Form.Control
            as="select" name="breed"
            value={this.state.breed}
            onChange={this.changeValue}
          >
            <option value="any">Any</option>
            <option value="american">American</option>
            <option value="bunnyRabbit">Bunny Rabbit</option>
            <option value="dutch">Dutch</option>
            <option value="dwarf">Dwarf</option>
            <option value="englishSpot">English Spot</option>
            <option value="lionhead">Lionhead</option>
            <option value="newZealand">New Zealand</option>
            <option value="rex">Rex</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="aaa" controlId="age">
          <Form.Label>AGE</Form.Label>
          <Form.Control
            as="select" name="age"
            value={this.state.age}
            onChange={this.changeValue}
          >
            <option value="any">Any</option>
            <option value="baby">Baby</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>

          </Form.Control>
        </Form.Group>

        <Form.Group className="aaa" controlId="gender">
          <Form.Label>GENDER</Form.Label>
          <Form.Control
            as="select" name="gender"
            value={this.state.gender}
            onChange={this.changeValue}
          >
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>

          </Form.Control>
        </Form.Group>

        <Form.Group className="aaa" controlId="goodWith">
          <Form.Label>GOOD WITH</Form.Label>
          <Form.Control
            as="select" name="goodWith"
            value={this.state.goodWith}
            onChange={this.changeValue}
          >
            <option value="any">Any</option>
            <option value="kids">Kids</option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="aaa" controlId="careAndBehavior">
          <Form.Label>CARE & BEHAVIOR</Form.Label>
          <Form.Control
            as="select" name="careAndBehavior"
            value={this.state.careAndBehavior}
            onChange={this.changeValue}
          >
            <option value="any">Any</option>
            <option value="houseTrained">House-trained</option>
            <option value="specialNeeds">Special Needs</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="aaa" controlId="petName">
          <Form.Label>PET NAME</Form.Label>
          <InputGroup className="mb-3" >
            <FormControl
              id="pet-name"
              aria-describedby="basic-addon2"
              name="petName"
              value={this.state.petName}
              onChange={this.changeValue}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" className="bbb" />
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>

      </Form>

    );
  }
}

export default Rabbit;