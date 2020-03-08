import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap'

import HowWeHelp from '../images/website/AdoptionInfo/HowWeHelp.jpg'

const AdoptionInfo = () => {

    return (
        <>
            <Container className="adoptionInfo my-5">

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, iste assumenda magni atque unde quisquam, aut debitis nulla cupiditate sapiente ut nisi aspernatur repellat natus. Optio assumenda accusamus sunt vel. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, iste assumenda magni atque unde quisquam, aut debitis nulla cupiditate sapiente ut nisi aspernatur repellat natus. Optio assumenda accusamus sunt vel.</p>

                <Accordion defaultActiveKey="0" className="my-5">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <b>10 Things To Consider Before Adopting A Pet</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta deserunt provident non delectus voluptatem, obcaecati incidunt commodi. Ut porro fuga similique molestiae dicta deleniti omnis, at quod. Dolorem, aliquid!Sunt maiores cumque soluta. Dolor nesciunt minus minima saepe ut debitis odit aperiam obcaecati sunt sit! Soluta, excepturi laborum aspernatur, non quisquam odio mollitia delectus nisi, repellat in placeat blanditiis.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <b>Why there is a Fee For Adoption</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <b>Shelter, SPCA, humane society or rescue – what’s the difference?</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <b>Chemistry: picking the right pet for you</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            <b>How to avoid picking the wrong pet</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                            <b>How to pick a pet if you have allergies</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                            <b>The Advantages of Adopting Pets In Pairs</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                            <b>Boy vs girl – what’s the difference?</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                            <b>Does coat color determine a cat’s personality?</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="9">
                            <b>Adopt a Senior Pet!</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="9">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="10">
                            <b>Disabled pets can be amazing!</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="10">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="11">
                            <b>Average Cost of Owning a pets</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="11">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="12">
                            <b>How to prepare for your pet’s vet costs</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="12">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="13">
                            <b>Vet Q&A: Are pets for adoption healthy?</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="13">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="14">
                            <b>Renting with pets</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="14">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="15">
                            <b>Giving Pets as Gifts</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="15">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="16">
                            <b>Study Shows Babies Exposed to Pets at Home are Healthier</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="16">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="17">
                            <b>Pet Adoption Teaches Good Parenting</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="17">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="18">
                            <b>10 Reasons Pets Are Good For Kids</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="18">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>




            </Container>
            <img src={HowWeHelp} class="img-fluid" alt="Responsive image"></img>
            <Container className="my-5">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem amet illum architecto reiciendis impedit magnam minus odit adipisci sit deserunt praesentium, repellat necessitatibus earum hic officia maxime est eaque!</p>

            </Container>
        </>
    );
}


export default AdoptionInfo;