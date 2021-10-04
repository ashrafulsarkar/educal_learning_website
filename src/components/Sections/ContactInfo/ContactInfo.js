import Button from '@restart/ui/esm/Button';
import './ContactInfo.css';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const ContactInfo = () => {
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col className="offset-lg-3 col-lg-6">
                        <div className="contact-info">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicname">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicMassage">
                                    <Form.Label>Massage</Form.Label>
                                    <Form.Control as="textarea" placeholder="Type..." />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactInfo;