import React from 'react';
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap';

const Banner = (props) => {
    return (
        <div className="banner text-center">
            <Container>
                <Row>
                    <Col>
                        <div className="top-title">{props.title}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;