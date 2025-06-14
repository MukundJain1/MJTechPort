import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Pictures/front pic.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO MY  <span className="purple">techWorld</span> — LET’S <span className="purple">CODE</span>!
            </h1>
            <p className="home-about-body">
              Ever since I wrote my first “Hello World,” I’ve been hooked on building with code 💻
              <br /><br />
              I have a solid foundation in classic programming languages like&nbsp;
              <i>
                <b className="purple">Java ☕, JavaScript 📜, and basic Python 🐍</b>
              </i>
              <br /><br />
              I’m passionate about crafting innovative&nbsp;
              <i>
                <b className="purple">web experiences 🌐 and digital products 💡</b>
              </i>
              , and I’m diving into exciting realms of&nbsp;
              <i>
                <b className="purple">mobile app development 📱</b>
              </i>
              <br /><br />
              Whenever I can, I bring my ideas to life with&nbsp;
              <b className="purple">Node.js 🟩</b> and modern JavaScript frameworks like&nbsp;
              <i>
                <b className="purple">React.js ⚛️</b>
              </i>
              — creating fast, scalable, and delightful user experiences. 🚀
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{ height: "480px", width: "300px" }} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MukundJain1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mukund-jain-19512326b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mukundjain2803/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
