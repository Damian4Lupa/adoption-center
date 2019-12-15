import React from 'react';
import { Navbar, Container, Button, Row, FormControl, Form } from 'react-bootstrap'
import '../styles/Header.css'
import logo from '../images/logo.png'
import search from '../images/search.png'
import heart1 from '../images/heart-regular.svg'
import heart2 from '../images/heart-solid.svg'

// import Nav from '../layouts/Navigation'


const Header = () => {
  return (
    <Navbar bg="">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            // width="30"
            height="100"
            className="d-inline-block align-top"
            alt="logo"
          />


          <Form className="search22">
            <FormControl type="text" placeholder="Search" className="d-inline mt-1" />
            <Button variant="light" className="mx-1">Search</Button>
            <Button variant="light" className="">X</Button>
          </Form>

          <div className="search">

            <Button variant="light">
              <img
                src={search}
                height="25"
                className=""
                alt="search"
              />
            </Button>

            <Button variant="light">
              <img
                src={heart1}
                height="25"
                className="mx-2"
                alt="favorite"
              />
            </Button>

            <Button variant="light">Log in</Button>
            <Button variant="light">Sign Up</Button>

          </div>

        </Navbar.Brand>
        
      </Container>
      
    </Navbar>
  )
}

export default Header