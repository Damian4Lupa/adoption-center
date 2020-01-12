import React, { Component } from 'react';
import { Navbar, Container, Button, Row, FormControl, Form } from 'react-bootstrap'
import '../styles/Header.css'
import logo from '../images/website/logo.png'
import search from '../images/website/search.png'
import emptyHeart from '../images/website/heart-regular.svg'
import fullHeart from '../images/website/heart-solid.svg'

class Header extends Component {
  state = {
    emptyHeart: true
  }

  changeHeartIcon = () => {
    if (this.state.emptyHeart) {
      return emptyHeart
    } else {
      return fullHeart
    }
  }

  changeHeartIconStatus = () => {

    this.setState({
      emptyHeart: false
    })

  }

  render() {
    return (

      <Navbar className="haeder">
        <Container>
          <Navbar.Brand href="#home">


            <div class="text-center">
              <img
                src={logo}
                // width="30"
                height="110"
                // className="mt-2"
                alt="logo"
              />
              {/* <h5 className="companyName">Adoption Center</h5> */}
            </div>





            {/* <Form className="search22">
            <FormControl type="text" placeholder="Search" className="d-inline mt-1" />
            <Button variant="light" className="mx-1">Search</Button>
            <Button variant="light" className="">X</Button>
          </Form> */}

            <div className="search">

              <button className="light">
                <img
                  src={search}
                  height="25"
                  className=""
                  alt="search"
                />
              </button>

              <button className="light" onClick={this.changeHeartIconStatus}>
                <img
                  src={this.changeHeartIcon()}
                  height="25"
                  className="mx-2"
                  alt="favorite"
                />
              </button>

              <button className="light">Log in</button>
              <button className="light">Sign Up</button>

            </div>

          </Navbar.Brand>

        </Container>

      </Navbar>

    );
  }
}

export default Header;



