import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap'
import '../styles/Navigation.css'
import $ from 'jquery'

class Navigation extends Component {
  state = {
    itemId: "1"
  }

  changeItemId = event => {

    let itemId = event.target.id
    console.log("itemId", itemId)

    this.setState({
      itemId
    })
  }

  changeItemStyle = event => {

    let targetId = event.target.id //nowe id
    let stateId = this.state.itemId // stare id

    if (targetId == stateId) {
      $(`#${stateId}`).addClass("active")
    } else if (targetId != stateId) {
      $(`#${stateId}`).removeClass("active")
      $(`#${targetId}`).addClass("active")
    }
  }

  render() {


    return (


      <Navbar className="navigation">

        <Container>

          <h4 className="companyName">Adoption Center</h4>

          <Nav className="float" onClick={this.changeItemStyle}>

            <Nav.Item>
              <Link to="/" id="1" className="active item" onClick={this.changeItemId}>
                How we help</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/FindAPet" id="2" className="item" onClick={this.changeItemId}>Find a Pet</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/AdoptionInfo" id="3" className="item" onClick={this.changeItemId}>Adoption Info</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/PetCareAndHealth" id="4" className="item" onClick={this.changeItemId}>Pet Care & Health</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/GetInvolved" id="5" className="item" onClick={this.changeItemId}>Get Involved</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Contact" id="6" className="item" onClick={this.changeItemId}>Contact</Link>
            </Nav.Item>

          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;