// Masukan komponen disini
import OnSale from "../components/OnSale"
import Footer from "../components/Footer"
import NavbarComp from "../components/NavbarComp";
import { Container, Col, Row, Card } from 'react-bootstrap'

const SalesPage = () => {
    return (

        <div>
            <NavbarComp />
            <div id="sales">
                <Container>
                    <h5 className="mt-5">Now Onsale!</h5>
                    <OnSale />
                    <div className='special'>
                        <Row>
                            <Col lg={6}>
                                <Card className="bg-dark text-white mt-5">
                                    <Card.Img src="../src/assets/image-sale1.png" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <div className="deskripsi">
                                            <Card.Title>Mortal Kombat 1</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                            </Card.Text>
                                            <h4 class="cost">IDR 200.000</h4>
                                            <a href="./game-detail.html" class="btn btn-outline-light mt-3">Buy Now</a>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card className="bg-dark text-white mt-5">
                                    <Card.Img src="../src/assets/image-sale2.png" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <div className="deskripsi">
                                            <Card.Title>Assasin Creed : Mirage</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                            </Card.Text>
                                            <h4 class="cost">IDR 200.000</h4>
                                            <a href="./game-detail.html" class="btn btn-outline-light mt-3">Buy Now</a>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>


    );
}

export default SalesPage