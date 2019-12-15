import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
// import '../styles/Header.css'
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

    $('#myTab a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })


    return (
      <>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
          </li>
        </ul>

        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
        </div>


      </>

      // <Nav justify variant="tabs" defaultActiveKey="/home">
      //   <Nav.Item></Nav.Item>

      //   <Nav.Item>
      //     <Nav.Link href="/home">How we help</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link eventKey="link-1">Find a Pet</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link eventKey="link-2">Adoption Info</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link eventKey="link-3">Pet Care & Health</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link eventKey="link-4">Get Involved</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link eventKey="link-5">Contact</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //   </Nav.Item>
      // </Nav>


      // <nav class="navbar navbar-expand-lg navbar-light  bg-light">
      //   <div class="mb-3">
      //     <div>
      //       <div
      //         class="ui pointing secondary menu navigation"
      //         onClick={this.changeItemStyle}
      //       >

      //         <a class="item first"></a>

      //         <Link to="/"><a id="1" class=" active item" onClick={this.changeItemId}>How we help</a></Link>

      //         <Link to="/FindAPet"><a id="2" class="item" onClick={this.changeItemId}>Find a Pet</a></Link>
      //         <Link to="/AdoptionInfo"><a id="3" class="item" onClick={this.changeItemId}>Adoption Info</a></Link>
      //         <Link to="/PetCareAndHealth"><a id="4" class="item" onClick={this.changeItemId}>Pet Care & Health</a></Link>
      //         <Link to="/GetInvolved"><a id="5" class="item" onClick={this.changeItemId}>Get Involved</a></Link>
      //         <Link to="/Contact"><a id="6" class="item" onClick={this.changeItemId}>Contact</a></Link>

      //         <a class="item last"></a>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default Navigation;