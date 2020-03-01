import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const item1 = <p>11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p>

const item2 = <p>22 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p>

const PetCareRabbit = () => {

    return (
        <Container>
            <Row>
                <Col sm={3} >
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Lorem ipsum</a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">dolor sit</a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">laborum fuga</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Tempore explicabo</a>
                    </div>
                </Col>

                <Col sm={9}>

                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">{item1}</div>
                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">{item2}</div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default PetCareRabbit