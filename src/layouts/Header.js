import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap'
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

            <div className="logo">
              <img
                src={logo}
                height="110"
                alt="logo"
              />
            </div>

            <div className="search">

              <button className="light">
                <img
                  src={search}
                  height="25"
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



