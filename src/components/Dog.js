import React, { Component } from 'react';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap'
import '../styles/pages.css'

class Dog extends Component {

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
                        <option value="bulldog">Bulldog</option>
                        <option value="staffordshireTerrier">Staffordshire Terrier</option>
                        <option value="beagle">Beagle</option>
                        <option value="labradorRetriever">Labrador Retriever</option>
                        <option value="borderCollie">Border Collie</option>
                        <option value="boxer">Boxer</option>
                        <option value="chihuahua">Chihuahua</option>
                        <option value="dachshund">Dachshund</option>
                        <option value="germanShepherdDog">German Shepherd Dog</option>
                        <option value="hound">Hound</option>
                        <option value="labradorRetriever">Labrador Retriever</option>
                        <option value="mixedBreed">Mixed Breed</option>
                        <option value="pitBullTerrier">Pit Bull Terrier</option>
                        <option value="terrier">Terrier</option>

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
                        <option value="puppy">Puppy</option>
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
                        <option value="dogs">Other dogs</option>
                        <option value="cats">Cats</option>
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

export default Dog;