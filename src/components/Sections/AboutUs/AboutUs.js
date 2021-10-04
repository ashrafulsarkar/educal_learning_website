import React from 'react';
import './AboutUs.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return(
        <section id="about-us">
            <Container>
                <Row className="align-items-center">
                    <Col lg='6'>
                        <div className="about-image">
                            <img src="/images/about.jpg" alt="" />
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="about-text">
                            <h4>Achieve Your <br/>Goals With Educal</h4>
                            <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                            <ul>
                                <li>Upskill your organization.</li>
                                <li>Access more then 100K online courses</li>
                                <li>Learn the latest skills</li>
                            </ul>
                            <div className="site-btn">
                                <Link to="/about" className="btn">About Us</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUs;