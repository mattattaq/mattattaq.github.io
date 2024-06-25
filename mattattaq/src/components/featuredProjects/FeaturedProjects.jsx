import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Panel from './Panel';
import { useLocation } from 'react-router-dom';
import PanelForm from './PanelForm'; // Assuming you have a form component for Panel
import './featuredProjects.scss';

const FeaturedProjects = ({edits}) => {
    const [panelProps, setPanelProps] = useState([]);

    const location = useLocation();
    useEffect(() => {
        const checkLocalServer = async () => {
            try {
                // Attempt to fetch from the local server
                const response = await fetch('http://localhost:3001/panel');
                if (response.ok) {
                    const data = await response.json();
                    setPanelProps(data);
                } else {
                    throw new Error('Local server not available');
                }
            } catch (error) {
                console.error('Local server not available, falling back to GitHub Pages:', error);
                try {
                    // Fallback to fetching from GitHub Pages URL
                    const response = await fetch('https://mattattaq.github.io/data.json');
                    if (!response.ok) {
                        throw new Error('Failed to fetch data from GitHub Pages');
                    }
                    const data = await response.json();
                    setPanelProps(data);
                } catch (error) {
                    console.error('Error fetching data from GitHub Pages:', error);
                }
            }
        };

        checkLocalServer();
    }, []);

    const addEntry = (entry) => {
        setPanelProps((prevEntries) => [...prevEntries, entry]);
    };

    return (
        <section id="sec3">
            <div id="to-top"><a href="#wrapper">Scroll to Top</a></div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h4><b>Projects</b> </h4>
                        {edits  && location.pathname === '/panel' && <PanelForm addEntry={addEntry} />}
                        {panelProps.map((panel, index) => (
                            // Render panel only if link is present
                            panel.link && (
                                <Panel
                                    key={index} // Ensure a unique key for each panel
                                    link={panel.link}
                                    img={panel.img}
                                    title={panel.title}
                                    description={panel.description}
                                    techIcons={panel.techIcons}
                                />
                            )
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedProjects;
