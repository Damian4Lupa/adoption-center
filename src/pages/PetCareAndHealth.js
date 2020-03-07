import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap'
import '../styles/Pages.css'

import Rabbit from '../components/PetCareRabbit'
import Dog from '../components/PetCareDog'
import Cat from '../components/PetCareCat'

const PetCareAndHealth = () => {

    return (
        <Container className="mb-5">

            <Tabs justify defaultActiveKey="dog" id="PetCareAndHealth" className="TabsPet my-5" >
                <Tab eventKey="" title="" disabled></Tab>

                <Tab eventKey="dog" title="Dog" className="tabPet">
                    <Dog />
                </Tab>
                <Tab eventKey="cat" title="Cat" className="tabPet">
                    <Cat />
                </Tab>
                <Tab eventKey="rabbit" title="Rabbit" className="tabPet">
                    <Rabbit />
                </Tab>
            </Tabs>

        </Container>

    );
}

export default PetCareAndHealth;