import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero-section">
            <Container>
                <Row>
                    <Col lg="6" className="d-flex align-items-center">
                        <div className="banner-text">
                            <h3>Learn Today and Earn Yeasterday.</h3>
                            <p>Unlimited access to all 60+ instructors.</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="hero-image">
                            <img src="/images/hero.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;