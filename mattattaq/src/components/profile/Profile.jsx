import React from 'react';
import './profile.scss';
import Coin from './Coin';
import { Container, Row, Col } from 'react-bootstrap';

export default function Profile() {
    return(
        <section id="sec2">
            <Coin />
            <Container>
                <Row>
                    <div id="mast">
                        <h1>Matthew Allbright - Full Stack Engineer</h1>
                    </div>
                </Row>
                <Row>
                    <Col lg={9}>
                        <h3 className="break lite">Welcome to my portfolio website hosted via <i>gh-pages</i>. Here is where I've got a <a href="#sec4"><i>timeline</i></a> of my accomplishments during and after college. It includes my first <a href="#gn"><i>graphic novel</i></a>, various conventions i've been to, and my job history that pertains to being a <i>web developer</i>. I also have examples of projects I've done for myself or work. You'll also find a link to my <a href="#gh"><i>github</i></a> account where I have some code examples.</h3>
                        <h3 className="break lite">If you have any questions or comments you can contact me <i><a href="mailto:mattatttaq@gmail.com">here</a></i> or my social media links above.</h3>
                    </Col>
                    <Col lg={3}>
                        <h1>Technology</h1>
                        <h3 className="lite">Scala, MySql, React, Redux, JavaScript, jQuery, Sass, HTML/CSS, Bootstrap, Foundation, PHP, git</h3>
                        <h1>Software</h1>
                        <h3 className="lite">Adobe Creative Suite, inVision, Visual Studio: Code </h3>
                        <h1>Familiar With:</h1>
                        <h3 className="lite"> Next, Gulp, Brew, Webpack, Node, Wordpress, Drupal, SalesForce Marketing Cloud</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
