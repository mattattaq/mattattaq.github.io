import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Coin from "./Coin";
import "./profile.scss";

export default function Profile() {
  return (
    <section id="sec2">
      <Coin />
      <Container>
        <Row>
          <div id="mast">
            <h1>Matthew Allbright - Full Stack Engineer</h1>
          </div>
        </Row>
        <Row>
          <Col lg={8}>
            <p className="break lite">
              Welcome to my portfolio website, proudly hosted on{" "}
              <i>GitHub Pages</i>. Here, you'll find a detailed{" "}
              <a href="#sec4">
                <i>timeline</i>
              </a>{" "}
              of my accomplishments during and after college. This includes my
              debut{" "}
              <a
                href="https://www.amazon.com/Reggie-Rabbit-Matthew-Albright/dp/0991528271/"
                target="_blank"
                rel="noreferrer"
              >
                <i>graphic novel</i>
              </a>
              , my participation in various conventions, and a comprehensive
              overview of my career as a <i>Full Stack Engineer</i>. Explore
              examples of both personal and professional projects, showcasing my
              skills and creativity. Additionally, you can visit my{" "}
              <a
                href="https://github.com/mattattaq/"
                target="_blank"
                rel="noreferrer"
              >
                <i>GitHub account</i>
              </a>{" "}
              for more code samples and open-source contributions. If you have
              any questions or comments, please don't hesitate to contact me
              through the provided form or via my social media links above.
            </p>
            <p className="break lite">
              If you have any questions or comments you can contact me{" "}
              <i>
                <a href="mailto:mattatttaq@gmail.com">here</a>
              </i>{" "}
              or my social media links above.
            </p>
          </Col>
          <Col lg={4}>
            <h5>
              <b>Languages</b>
            </h5>
            <p className="lite">
              Scala, Kotlin, SQL, JavaScript (ECMAScript 2025), TypeScript,
              HTML, Sass, CSS
            </p>
            <h5>
              <b>Frameworks & Libraries:</b>
            </h5>
            <p className="lite">
              {" "}
              Next.js, React, Redux, Vue, GraphQL, Express
            </p>
            <h5>
              <b>Skills:</b>
            </h5>
            <p className="lite">
              {" "}
              API Development (design, documentation, testing, and monitoring),
              SEO, Agile/Scrum
            </p>
            <h5>
              <b>Tools:</b>
            </h5>
            <p className="lite">
              {" "}
              VS Code, IntelliJ, Git, Bitbucket, Gulp, sbt, Webpack, Vite, npm,
              Node.js, Snowflake
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
