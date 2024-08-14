import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";

const LandingPage = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Sohil Vaghela</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#features">Skills</Nav.Link>
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        {/* Introduction Section */}
        <section
          id="home"
          className="intro-section py-5 text-center text-light"
          style={{ backgroundColor: "#343a40" }}
        >
          <Container>
            <Row>
              <Col md={12}>
                <h1>Welcome to My Website</h1>
                <p>
                  Hello! I'm Sohil Vaghela, a passionate UI Developer
                  specializing in React.js. Explore my work and skills!
                </p>
                <Button variant="primary" href="#contact">
                  Get in Touch
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* About Me Section */}
        <section id="about" className="about-section py-5 bg-light">
          <Container>
            <Row>
              <Col md={12} className="text-center">
                <h2>About Me</h2>
                <p>
                  I am a dedicated UI Developer with experience in creating
                  responsive and interactive web applications. I have a strong
                  background in React.js, JavaScript, and front-end development.
                  My goal is to build user-friendly and aesthetically pleasing
                  interfaces.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Skills Section */}
        <section id="features" className="features-section py-5">
          <Container>
            <h2 className="text-center mb-4">My Skills</h2>
            <Row>
              <Col md={6} className="text-center">
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>React.js Development</Card.Title>
                    <Card.Text>
                      Building dynamic and responsive user interfaces using
                      React.js.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="text-center">
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Front-End Development</Card.Title>
                    <Card.Text>
                      Expertise in HTML, CSS, JavaScript, and Bootstrap for
                      responsive design.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="testimonials-section py-5 bg-light"
        >
          <Container>
            <h2 className="text-center mb-4">Testimonials</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      "I am a talented developer with a keen eye for detail,
                      consistently delivering top-notch work that stands out for
                      its quality and precision. My ability to solve complex
                      problems and innovate makes me a standout performer in any
                      team."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      "Working with me has been an absolute pleasure. I
                      consistently deliver high-quality, efficient, and
                      well-documented code, ensuring that projects are not only
                      completed on time but also exceed expectations."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      "My expertise in front-end development is exceptional.
                      With a strong focus on detail and a commitment to
                      delivering outstanding results, I bring valuable insights
                      and skills to any project, making me an essential
                      contributor to success."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call-to-Action Section */}
        <section
          id="contact"
          className="cta-section py-5 text-center text-light"
          style={{ backgroundColor: "#007bff" }}
        >
          <Container>
            <Row>
              <Col md={12}>
                <h2>Contact Me</h2>
                <p>
                  If you're interested in working with me or just want to say
                  hello, feel free to reach out!
                </p>
                <Button
                  variant="light"
                  size="lg"
                  href="mailto:sohilvaghela7863@gmail.com"
                >
                  Email Me
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      {/* Footer */}
      <footer
        className="text-center py-4"
        style={{ backgroundColor: "#343a40", color: "#fff" }}
      >
        <Container>
          <p>&copy; 2024 Sohil Vaghela. All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default LandingPage;
