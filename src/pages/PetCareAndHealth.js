import React from 'react';
import { Container } from 'react-bootstrap'

import Rabbit from '../components/PetCareRabbit'

const PetCareAndHealth = () => {

    return (
        <Container className="my-5">

            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li class="nav-item mx-5">
                    <a class="nav-link" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" ></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Dog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Cat</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Rabbit</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" ></a>
                </li>
            </ul>

            <div class="tab-content nav-justified mt-4" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Rabbit /></div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Rabbit /></div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><Rabbit /></div>
            </div>

        </Container>

    );
}

export default PetCareAndHealth;