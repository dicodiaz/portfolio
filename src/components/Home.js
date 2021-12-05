import { Col, Container, Row } from 'react-bootstrap';
import Counter from './Counter';

const Home = () => (
  <main className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center">
    <Container fluid="md">
      <Row className="mx-0 justify-content-center">
        <Col md={9}>
          <h1 className="display-2 text-center">Hello React-Redux!</h1>
          <p className="lead">
            This project will allow you to set up React and Redux in any other project in seconds.
            All you have to do is download this repository&apos;s files, copy and paste them into
            your other project&apos;s folder, run <code>npm install</code>, and voilá! Your project
            is ready to run <code>npm start</code> for development build and{' '}
            <code>npm run build</code> for production build.
          </p>
          <Counter />
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
