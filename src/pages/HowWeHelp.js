import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import Slider from '../components/SliderHowWeHelp'
import Counter from '../components/Counter'
import '../styles/Pages.css'
import Team from '../data/Team'

// import testFoto from '../images/team.jpg'
import dog from '../images/website/HowWeHelp/dog.png'
import cat from '../images/website/HowWeHelp/cat.png'
import rabbit from '../images/website/HowWeHelp/rabbit.png'

class HowWeHelp extends Component {
   state = {
      WomenId: 1,
      MenId: 1,
      WomenId2: 2,
      MenId2: 2,
   }

   componentDidMount = () => {
      this.generateId()
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.WomenId != this.state.WomenId) {
         this.generateId()
      }
   }

   generateId = () => {

      let MenId = 1
      let WomenId = 1
      let MenId2 = 2
      let WomenId2 = 2

      WomenId = Math.floor((Math.random() * 3) + 1)
      MenId = Math.floor((Math.random() * 6) + 1)

      if (WomenId === 3) {
         WomenId2 = 1
      } else {
         WomenId2 = WomenId + 1
      }

      if (MenId === 6) {
         MenId2 = 1
      } else {
         MenId2 = MenId + 1
      }

      this.setState({
         MenId,
         WomenId,
         WomenId2,
         MenId2,
      })
   }

   render() {

      const { WomenId, MenId, WomenId2, MenId2 } = this.state

      return (
         <>

            <Slider />

            <Container>

               <section className="marketing">

                  <Row>

                     <div className="col-lg-4">

                        <img src={dog} width="260" />

                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>

                     </div>

                     <div className="col-lg-4">

                        <img src={rabbit} width="150" />

                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>

                     </div>

                     <div className="col-lg-4">

                        <img src={cat} width="255" />

                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

                     </div>
                  </Row>
               </section>

            </Container>

            <div className="mt-5">

               <Counter />

            </div>

            <section className="showcase">
               <div className="container-fluid p-0">
                  <div className="row no-gutters">

                     <div className="col-lg-6 order-lg-2 text-white showcase-img img-adoptedPets"></div>

                     <div className="col-6 order-lg-1 my-auto showcase-text">
                        <h2>We connect people and pets</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatum temporibus debitis adipisci delectus sed, quae corporis quo omnis cum eaque veritatis deleniti laboriosam rerum non rem repudiandae culpa est.</p>
                     </div>
                  </div>
                  <div className="row no-gutters">
                     <div className="col-lg-6 text-white showcase-img img-donors"></div>
                     <div className="col-lg-6 my-auto showcase-text">
                        <h2>Donors give us the basics</h2>
                        <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita beatae fuga magnam non assumenda aut maxime sint! Necessitatibus quos sapiente fugit voluptatibus officia, laudantium at expedita dolorem eum saepe id?</p>
                     </div>
                  </div>
                  <div className="row no-gutters">
                     <div className="col-lg-6 order-lg-2 text-white showcase-img img-volunteers" ></div>
                     <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>We operate thanks to volunteers</h2>
                        <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita error autem facilis dolor quasi libero magni, animi illo soluta dolore quam, enim recusandae atque officia alias quos accusamus quo?</p>
                     </div>
                  </div>
               </div>
            </section>

            <section className="team text-center bg-light">
               <Container>
                  <h2 className="mb-5">Our team</h2>
                  <Row>
                     <div className="col">
                        <div className="team-item mx-auto mb-5 mb-lg-0">
                           <img className="img-fluid rounded-circle mb-3" src={Team.Women[WomenId].img} alt="" />
                           <h5>{Team.Women[WomenId].name}</h5>
                           <p className="font-weight-light mb-0">{Team.Women[WomenId].text}</p>
                        </div>
                     </div>
                     <div className="col">
                        <div className="team-item mx-auto mb-5 mb-lg-0">
                           <img className="img-fluid rounded-circle mb-3" src={Team.Men[MenId].img} alt="" />
                           <h5>{Team.Men[MenId].name}</h5>
                           <p className="font-weight-light mb-0">{Team.Men[MenId].text}</p>
                        </div>
                     </div>
                     <div className="col">
                        <div className="team-item mx-auto mb-5 mb-lg-0">
                           <img className="img-fluid rounded-circle mb-3" src={Team.Women[WomenId2].img} alt="" />
                           <h5>{Team.Women[WomenId2].name}</h5>
                           <p className="font-weight-light mb-0">{Team.Women[WomenId2].text}</p>
                        </div>
                     </div>
                     <div className="col">
                        <div className="team-item mx-auto mb-5 mb-lg-0">
                           <img className="img-fluid rounded-circle mb-3" src={Team.Men[MenId2].img} alt="" />
                           <h5>{Team.Men[MenId2].name}</h5>
                           <p className="font-weight-light mb-0">{Team.Men[MenId2].text}</p>
                        </div>
                     </div>

                  </Row>
               </Container>

            </section>

         </>
      );
   }
}

export default HowWeHelp;

