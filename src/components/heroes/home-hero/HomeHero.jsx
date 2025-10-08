// * bootstrap imports *
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// * styles imports *
import classes from './HomeHero.module.scss';

function HomeHero() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className={classes.homehero}>
              <h1>Pruitt Strategic Security</h1>
              <h2>Dedicated to increasing business resilience.</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeHero;
