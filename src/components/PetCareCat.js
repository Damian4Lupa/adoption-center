import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'

import cat1 from '../images/website/PetCareAndHealth/cat/cat1.jpg'
import cat2 from '../images/website/PetCareAndHealth/cat/cat2.jpg'
import cat3 from '../images/website/PetCareAndHealth/cat/cat3.jpg'
import cat4 from '../images/website/PetCareAndHealth/cat/cat4.jpg'
import cat5 from '../images/website/PetCareAndHealth/cat/cat5.jpg'
import cat6 from '../images/website/PetCareAndHealth/cat/cat6.jpg'
import cat7 from '../images/website/PetCareAndHealth/cat/cat7.jpg'
import cat8 from '../images/website/PetCareAndHealth/cat/cat8.jpg'
import cat9 from '../images/website/PetCareAndHealth/cat/cat9.jpg'
import cat10 from '../images/website/PetCareAndHealth/cat/cat10.jpg'
import cat11 from '../images/website/PetCareAndHealth/cat/cat11.jpg'
import cat12 from '../images/website/PetCareAndHealth/cat/cat12.jpg'


const basic = <div><img src={cat4} alt="" height="200" className="float-right ml-4 mb-3" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tempora doloremque minus atque ullam in corporis labore consequatur, molestiae porro magni, praesentium, eius illum ad at natus nulla voluptate ipsam.
       Ipsa molestiae dolor, quo quos officia mollitia similique repellendus. Doloribus fugiat dolore ducimus nostrum dicta possimus, suscipit ratione tempore illum eum quidem tempora id quas. Enim cumque obcaecati expedita natus.
       Impedit veritatis animi dolor? Fugiat, iure. Eius vel harum laudantium facilis adipisci dolores dicta aliquid pariatur impedit voluptates modi, iusto sequi, aliquam architecto illo quisquam praesentium nostrum repudiandae deleniti nemo!
Perspiciatis quia nihil exercitationem. Iure, doloribus enim aperiam architecto nisi nemo culpa quos impedit? Incidunt animi magni recusandae earum beatae amet, inventore a voluptatem hic ab libero sint eaque cupiditate.</p>
    <img src={cat12} alt="" height="200" className="float-left mr-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus nulla placeat, dicta maiores amet quod ad, sed quia dolorem provident rerum! Id esse minima error eaque! Laudantium, nostrum numquam.
       Impedit consectetur fuga vero earum natus facere voluptatibus possimus ut labore ducimus incidunt tenetur, sint, a, eum expedita. Sed distinctio autem magnam saepe debitis ipsam aperiam in ea placeat similique.
       Suscipit doloremque neque, id quia, at, magni nostrum ab quidem alias autem numquam? Voluptates natus tempore dolor? Animi illo quis optio aliquam sit cum, et vitae, consequatur, nulla eum aliquid!
       Ad fugit sequi nesciunt! Molestias quia maiores obcaecati fuga neque ipsum itaque aperiam saepe quas consectetur, explicabo eaque tempora. Ipsum minima nemo accusamus ipsa, aspernatur similique facilis aliquid cupiditate tempora.
       Earum minus dolores dolorem recusandae! Neque assumenda quae quas sapiente ad commodi illo accusantium animi! Quod, doloremque iusto quos ipsum, nostrum laudantium, pariatur dolore impedit ratione voluptatum deserunt soluta veniam?
Exercitationem ab fuga illum voluptatibus, quis tenetur ducimus ullam optio dolore quo tempora qui hic, magnam fugiat, nostrum eos neque blanditiis iure aspernatur! Culpa consectetur sit ullam eaque voluptate temporibus!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corporis distinctio iusto debitis in est odit nobis excepturi, cupiditate, inventore eum quisquam. Maiores voluptate minus dolorum eos deserunt explicabo blanditiis.
                                 Molestiae veniam reiciendis incidunt, libero nobis aspernatur assumenda doloremque provident, error dolorem dicta doloribus temporibus unde impedit illo delectus autem! Porro, blanditiis libero ad repudiandae provident vero id mollitia placeat.
Nihil sit eum saepe omnis, laudantium hic consequuntur repellendus delectus ipsum quae. Hic veniam, soluta impedit rerum facere, labore suscipit incidunt sit fugit alias minus sunt id mollitia non ex.</p></div>

const nutrition = <div><img src={cat1} alt="" height="200" className="float-right ml-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p>
    <img src={cat11} alt="" height="200" className="float-left mr-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, soluta voluptatem ipsam architecto culpa explicabo consectetur aperiam veniam veritatis voluptatibus commodi rem nostrum at, cumque nam consequatur expedita quas enim!
       Officia, adipisci placeat deleniti fugiat, in sunt quis incidunt officiis laboriosam laudantium voluptas sequi, minus repellendus cumque dicta nisi accusamus voluptatem ab explicabo deserunt suscipit iure quidem blanditiis consequuntur. Veritatis?
Velit, delectus facilis sed rem natus at ducimus, molestiae eius ipsa dolorem reiciendis accusantium quisquam pariatur? Placeat quis nihil, temporibus asperiores labore assumenda laborum similique numquam nostrum, dolorum quam cupiditate?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni voluptates, consectetur animi aliquam saepe sed deserunt iusto eum velit maiores accusamus quod perferendis explicabo omnis odio harum quidem!
                              Placeat, asperiores quis! Eos aliquid praesentium dolorum sapiente laboriosam ipsum vero odit, nihil consectetur vitae sed? Laboriosam quos amet quo, repellendus quibusdam sapiente cumque porro reprehenderit molestias, nihil repellat quisquam!
                              Ad, delectus minima alias debitis odio temporibus totam exercitationem, consectetur sequi sunt explicabo, quaerat ratione porro a dignissimos iste enim quae fugit? Unde nobis itaque quisquam nostrum beatae sit aliquam.
Esse laudantium quibusdam eveniet rerum eius provident est, excepturi corporis natus voluptate consequatur, fugiat ducimus. Similique vel debitis expedita corporis asperiores ducimus iste quidem omnis iure facere libero, vitae repudiandae!</p></div>

const behavior = <div><img src={cat7} alt="" height="200" className="float-right ml-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi accusamus harum ullam exercitationem? At odio aut quam, dignissimos temporibus perferendis accusamus vitae odit? Obcaecati nesciunt debitis nostrum deserunt quas.
   Sapiente eos sunt quidem, quam quasi rerum asperiores iste ad fugit. Eum possimus inventore numquam illo dolorum quam, dicta necessitatibus tempora ex esse! Porro voluptatum error consequatur mollitia. Vel, atque.
   Sit ullam suscipit quam reiciendis asperiores natus possimus recusandae hic fugiat, voluptatibus quo dolorum officia iusto enim consequuntur provident! Suscipit, maiores sint porro voluptatum commodi temporibus? Placeat officia distinctio obcaecati.
   Fugiat sequi obcaecati, et vitae quas, nemo id laboriosam, deserunt aliquam a accusantium veritatis! Neque provident quidem laboriosam dignissimos ea repellendus maiores molestias explicabo tempora. Placeat voluptatibus in dolor ullam.
Ad minima voluptas molestias ex mollitia cum minus, saepe illum, quis ab corporis adipisci harum in alias officiis necessitatibus quo sint fugiat veniam suscipit ipsa, modi nulla nam sed. Eum.</p><img src={cat3} alt="" height="200" className="float-left mr-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus recusandae ea impedit vel suscipit? Illum pariatur et repellat amet veritatis distinctio. Iste autem cum nisi velit veritatis exercitationem ex?
                                 Deleniti, laborum non odit quos debitis reprehenderit dolorem quibusdam quis eveniet rem optio tenetur, expedita dignissimos alias aspernatur quaerat mollitia ut, iure eos. Sequi quod a ut iusto temporibus obcaecati!
                                 Exercitationem rerum cupiditate voluptas eius animi, eos similique commodi officiis tempora nobis impedit qui aliquam quisquam velit, eaque expedita laboriosam molestias adipisci? Cum quis consequatur fuga qui maxime, vel impedit!
                                 Molestias adipisci tempore dolorum ipsam voluptatem accusamus. Libero voluptate ab, a blanditiis voluptates inventore doloremque repudiandae deleniti voluptatum optio magnam dolorem non provident unde necessitatibus sint, repellat neque praesentium dolore?
                                 Explicabo corrupti facere incidunt in repellendus consequatur perferendis magnam cumque dolorum sit provident dolores, quod earum recusandae atque officiis eveniet id? Distinctio exercitationem est illum facilis saepe asperiores maxime error.
                                 Eum eveniet blanditiis fugiat sit quisquam facere! Adipisci sint qui beatae? Fugit sequi libero recusandae praesentium eum numquam cum voluptas. Fuga praesentium corporis doloribus qui perferendis quasi quas nemo. Dolore?
Eos cum eum adipisci sequi, temporibus rerum cumque non consectetur mollitia explicabo laborum magnam dicta, voluptates ab nobis placeat similique minus, dolorum eligendi. Quae voluptates, quidem blanditiis reprehenderit autem repellat?</p>
</div>

const safety = <div><img src={cat6} alt="" height="200" className="float-right ml-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, minima, magnam culpa ut, fugit debitis animi nulla accusantium soluta exercitationem quam. Facilis quibusdam dolores perspiciatis. Magnam quaerat facere voluptatum aut?
   Adipisci amet mollitia obcaecati sint dignissimos nihil eveniet voluptatem consequuntur ipsum placeat alias, aperiam id, vitae commodi a eius nisi? Quam reiciendis maxime sunt animi error dolores temporibus odit nesciunt!
   Reprehenderit quae rem eaque at laboriosam fugiat totam nisi nesciunt, quisquam architecto voluptate sapiente cupiditate consequatur! Exercitationem quo commodi soluta, ea sequi reprehenderit reiciendis, repellat saepe quos modi suscipit sunt!
Consectetur sequi veritatis ut repellat iure exercitationem pariatur quod dolorum enim. Voluptate, dolores! Laudantium consectetur repellat id porro sapiente provident modi alias nihil velit, maxime, quod similique distinctio magnam quae?</p>
    <img src={cat9} alt="" height="200" className="float-left mr-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti ut ipsum cupiditate accusantium recusandae! Voluptate voluptas dolor odit officia perferendis sapiente temporibus ipsam nulla voluptatibus nemo repudiandae, explicabo odio.
                          Vel, quos voluptatem? Explicabo aut officia minus! Commodi, amet nemo? Delectus laborum, saepe ut aspernatur enim, ipsum eveniet aliquid repellat eum amet, velit nesciunt aperiam facere doloribus. Quae, itaque incidunt.
                          Deserunt, sequi. Iure in rem quaerat. Delectus obcaecati saepe neque et hic sit repellat illo ipsa quidem eum voluptatem fugiat quos corporis adipisci quae eveniet, aperiam ut voluptatum deleniti eius.
In laborum saepe debitis temporibus beatae, ut quisquam fugit animi ipsam harum maxime nostrum. Dolor, soluta quos? Eveniet repudiandae doloribus corrupti, iste laboriosam eius commodi, soluta sit officia harum recusandae?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique delectus libero dolorem, nobis dolorum totam voluptas. Deserunt fugiat totam voluptatibus quam, at minus suscipit voluptas! Doloribus nobis ducimus vero!Officia adipisci illo impedit, expedita reprehenderit assumenda vero et alias cumque veritatis qui sit quibusdam fugit quisquam tempore optio iure laboriosam nihil quasi at? Eaque voluptatibus sequi neque suscipit eius!</p></div>

const health = <div><img src={cat10} alt="" width="250" className="float-right ml-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, nobis commodi totam nemo maxime modi error hic amet atque, voluptas similique molestiae nostrum tempore explicabo necessitatibus ad, suscipit molestias tenetur.Delectus accusantium natus consequuntur nihil possimus amet, quod numquam iure praesentium, mollitia suscipit eum deleniti nesciunt dolorum rerum optio corrupti ut. Praesentium, quam! Ducimus soluta perspiciatis culpa quibusdam iste porro.</p><img src={cat5} alt="" width="250" className="float-left mr-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab placeat labore sit deleniti. Quae nam distinctio culpa nostrum et, dolor quo laborum nemo est, voluptatibus saepe doloribus quia enim voluptas.
      Voluptate quasi itaque, consectetur repudiandae, voluptas delectus odio repellendus ad quisquam adipisci veritatis reprehenderit illum recusandae earum iusto. Facere, consequatur nemo assumenda perspiciatis atque doloremque exercitationem odit libero vel velit?
      Ipsa inventore ab quis, quaerat voluptatum libero. Ipsum libero recusandae commodi sapiente ab cupiditate excepturi at inventore, quisquam enim error quam magni ad saepe deleniti voluptatibus ut non a harum.
Totam iste labore est, nobis atque earum aut, eaque minima possimus beatae odit sed, qui sint! Id, deleniti eveniet obcaecati vero voluptatibus recusandae, illo animi vitae tempora accusantium aspernatur doloribus!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui delectus veritatis enim quod, accusantium alias non rem laudantium illo eius reprehenderit accusamus! Animi quo inventore aspernatur ad consectetur natus!
                              Veritatis blanditiis sapiente autem quidem ab iste vel facere, facilis ut dolorum aut rem praesentium, fugit possimus non consequuntur minus vero quaerat. Harum dolorem maxime fugiat? Quo accusamus minima voluptatibus!
Quod corrupti, labore esse necessitatibus autem harum delectus eveniet nostrum maxime veniam corporis sequi! Itaque expedita commodi minima et? Eius optio iure officia a dolor obcaecati, odio quam iusto cum.</p></div>

const tips = <div><img src={cat8} alt="" height="200" className="float-right ml-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo quas veritatis id, dignissimos consequatur alias eveniet, aut excepturi necessitatibus, quaerat totam fugit sunt sapiente ab cum suscipit earum officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, aperiam tempore modi sequi quidem sunt! Ratione atque eligendi aliquam, quaerat delectus exercitationem qui facilis temporibus laborum fuga, asperiores aperiam dicta!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tempora doloremque minus atque ullam in corporis labore consequatur, molestiae porro magni, praesentium, eius illum ad at natus nulla voluptate ipsam.
   Ipsa molestiae dolor, quo quos officia mollitia similique repellendus. Doloribus fugiat dolore ducimus nostrum dicta possimus, suscipit ratione tempore illum eum quidem tempora id quas. Enim cumque obcaecati expedita natus.
   Impedit veritatis animi dolor? Fugiat, iure. Eius vel harum laudantium facilis adipisci dolores dicta aliquid pariatur impedit voluptates modi, iusto sequi, aliquam architecto illo quisquam praesentium nostrum repudiandae deleniti nemo!
Perspiciatis quia nihil exercitationem. Iure, doloribus enim aperiam architecto nisi nemo culpa quos impedit? Incidunt animi magni recusandae earum beatae amet, inventore a voluptatem hic ab libero sint eaque cupiditate.</p><img src={cat2} alt="" height="200" className="float-left mr-4 mb-3" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus nulla placeat, dicta maiores amet quod ad, sed quia dolorem provident rerum! Id esse minima error eaque! Laudantium, nostrum numquam.
                                 Impedit consectetur fuga vero earum natus facere voluptatibus possimus ut labore ducimus incidunt tenetur, sint, a, eum expedita. Sed distinctio autem magnam saepe debitis ipsam aperiam in ea placeat similique.
                                 Suscipit doloremque neque, id quia, at, magni nostrum ab quidem alias autem numquam? Voluptates natus tempore dolor? Animi illo quis optio aliquam sit cum, et vitae, consequatur, nulla eum aliquid!
                                 Ad fugit sequi nesciunt! Molestias quia maiores obcaecati fuga neque ipsum itaque aperiam saepe quas consectetur, explicabo eaque tempora. Ipsum minima nemo accusamus ipsa, aspernatur similique facilis aliquid cupiditate tempora.
                                 Earum minus dolores dolorem recusandae! Neque assumenda quae quas sapiente ad commodi illo accusantium animi! Quod, doloremque iusto quos ipsum, nostrum laudantium, pariatur dolore impedit ratione voluptatum deserunt soluta veniam?
Exercitationem ab fuga illum voluptatibus, quis tenetur ducimus ullam optio dolore quo tempora qui hic, magnam fugiat, nostrum eos neque blanditiis iure aspernatur! Culpa consectetur sit ullam eaque voluptate temporibus!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique delectus libero dolorem, nobis dolorum totam voluptas. Deserunt fugiat totam voluptatibus quam, at minus suscipit voluptas! Doloribus nobis ducimus vero!Officia adipisci illo impedit, expedita reprehenderit assumenda vero et alias cumque veritatis qui sit quibusdam fugit quisquam tempore optio iure laboriosam nihil quasi at? Eaque voluptatibus sequi neque suscipit eius!</p></div>

const PetCareCat = () => {

    return (
        <Container>

            <Tab.Container id="left-tabs-example" defaultActiveKey="basic">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="basic">Basic care</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="nutrition">Nutrition</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="behavior">Behavior & Training</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="safety">Safety</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="health">Health</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tips">Tips</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="basic">
                                {basic}
                            </Tab.Pane>
                            <Tab.Pane eventKey="nutrition">
                                {nutrition}
                            </Tab.Pane>
                            <Tab.Pane eventKey="behavior">
                                {behavior}
                            </Tab.Pane>
                            <Tab.Pane eventKey="safety">
                                {safety}
                            </Tab.Pane>
                            <Tab.Pane eventKey="health">
                                {health}
                            </Tab.Pane>
                            <Tab.Pane eventKey="tips">
                                {tips}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </Container>
    )
}

export default PetCareCat