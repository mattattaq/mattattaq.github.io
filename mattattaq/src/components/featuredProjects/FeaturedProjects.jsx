import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Panel from './Panel';
import './featuredProjects.scss';

const FeaturedProjects = () => {
    const [panelProps, setPanelProps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mattattaq.github.io/data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log('data', data);
                setPanelProps(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section id="sec3">
          <div id="to-top"><a href="#wrapper">Scroll to Top</a></div>
          <Container>
              <Row>
                <Col lg={12}>
                <h4><b>Projects</b></h4>
                {panelProps.map(panel => (
                    <Panel
                    link={panel.link}
                    img={panel.img}
                    title={panel.title}
                    description={panel.description}
                    techIcons={panel.techIcons}
                    key={panel.title}
                    />
                ))}
                </Col>
              </Row>
          </Container>
        </section>
    );
};

export default FeaturedProjects;
