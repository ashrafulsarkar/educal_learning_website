import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="headerPart">
            <Container>
                <Row>
                    <Col lg="4" className="d-flex align-items-center">
                        <Link to="/"><img src='/images/logo.png' alt="" /></Link>
                    </Col>
                    <Col lg="8">
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                                <Link to="/home">Home</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/about">About</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/services">Services</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/contact">Contact</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;