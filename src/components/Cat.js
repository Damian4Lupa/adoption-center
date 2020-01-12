import React, { Component } from 'react';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap'
import '../styles/pages.css'

class Cat extends Component {

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

         <Form>

            <Form.Group className="aaa" controlId="breed">
               <Form.Label>BREED</Form.Label>
               <Form.Control
                  as="select" name="breed"
                  value={this.state.breed}
                  onChange={this.changeValue}
               >
                  <option value="any">Any</option>
                  <option value="abyssinian">Abyssinian</option>
                  <option value="americanShorthair">American Shorthair</option>
                  <option value="bombay">Bombay</option>
                  <option value="calico">Calico</option>
                  <option value="domesticLongHair">Domestic Long Hair</option>
                  <option value="domesticMediumHair">Domestic Medium Hair</option>
                  <option value="domesticShortHair">Domestic Short Hair</option>
                  <option value="maineCoon">Maine Coon</option>
                  <option value="persian">Persian</option>
                  <option value="siamese">Siamese</option>
                  <option value="tabby">Tabby</option>
                  <option value="tortoiseshell">Tortoiseshell</option>
                  <option value="tuxedo">Tuxedo</option>

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
                  <option value="kitten">Kitten</option>
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
                  <option value="otherCats">Other cats</option>
               </Form.Control>
            </Form.Group>

            <Form.Group className="aaa" controlId="coatLength">
               <Form.Label>COAT LENGTH</Form.Label>
               <Form.Control
                  as="select" name="coatLength"
                  value={this.state.coatLength}
                  onChange={this.changeValue}
               >
                  <option value="any">Any</option>
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
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
                  <option value="declawed">Declawed</option>
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

export default Cat;