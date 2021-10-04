import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="footer-left">
                            <img src="/images/logo.png" alt="" />
                            <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="quick-link">
                            <h4>Quick Link</h4>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="subscribe">
                            <h4>Subscribe Now</h4>
                            <form>
                                <div className="input-box">
                                    <input type="email" />
                                    <input type="button" value="Subscribe" />
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="copyRight text-center">© 2022 Educal, All Rights Reserved. Design By Ashraful Sarkar.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;