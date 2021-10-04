import React, { useEffect, useState } from 'react';
import "./Service.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[])
    const homeService = data.slice(0,4);

    return (
        <section id="service-part">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="site-title text-center mb-5">
                            <h4>Our Services</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        homeService.map(service => <SingleService key={service.key} service={service} col="3"></SingleService>)
                    }
                </Row>
            </Container>
        </section>
    );
};

const SingleService = (props) => {
    const {courseName, details, image} = props.service;

    return(
        <Col lg={props.col}>
            <div className="single-items mb-3">
                <div className="service-imges">
                    <img src={image} alt="" />
                </div>
                <div className="service-details">
                    <h4>{courseName.slice(0, 35)}</h4>
                    <p>{details.slice(0, 100)}</p>
                    <div className="site-btn">
                        <Link to="/services" className="btn">Details</Link>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Service;
export {SingleService};