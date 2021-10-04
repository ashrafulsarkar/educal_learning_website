import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Sections/Banner/Banner';
import { SingleService } from '../Sections/Service/Service';

const Services = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[])

    return (
        <main>
            <Banner title="Services"></Banner>
            <section id="service-part">
                <Container>
                    <Row>
                        {
                            data.map(service => <SingleService key={service.key} service={service} col="4"></SingleService>)
                        }
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Services;