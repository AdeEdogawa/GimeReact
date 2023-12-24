import { Container, Col, Row, FormControl, FormLabel, Form } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

const SignupPage = () => {
    return (
        <div>
            <NavbarComp />
            <div id="signup">
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <div className="bg-signup bg-dark" data-bs-theme="dark">
                                <h5>Sign Up</h5>
                                <p>Make an account to find the joy!</p>
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <FormLabel for="fullname"><b>Full Name</b></FormLabel>
                                            <FormControl type="text" className="mb-3" data-bs-theme="dark" />
                                        </Col>
                                        <Col lg={6}>
                                            <FormLabel for="phone"><b>Phone Number</b></FormLabel>
                                            <FormControl type="text" className="mb-3" data-bs-theme="dark" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <FormLabel for="Email"><b>Email</b></FormLabel>
                                            <FormControl type="text" className="mb-3" data-bs-theme="dark" />
                                        </Col>
                                        <Col lg={6}>
                                            <FormLabel for="password"><b>Make a password</b></FormLabel>
                                            <FormControl type="" className="mb-3" data-bs-theme="dark" />
                                        </Col>
                                    </Row>
                                </Form>
                                <a href="/" className="btn d-flex justify-content-center mt-5">Signup</a>
                                <p className="d-flex justify-content-center mt-5">Don't have an account? <a href="/LoginPage">Login</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default SignupPage;