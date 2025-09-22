// * bootstrap imports *
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// * styles imports *
import classes from './About.module.scss';

function About() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className={classes.about}>
              <p className={classes.about_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc enim, lacinia et diam id, pulvinar fermentum nisl. Phasellus ac massa sollicitudin, finibus diam et, aliquam eros. Aenean nibh augue, cursus non volutpat nec, convallis nec erat. Duis feugiat tincidunt mollis. Fusce cursus finibus posuere. Aenean sed tincidunt purus. Aenean mollis quam et felis gravida, at aliquam risus lobortis. Cras vel congue lectus. Suspendisse tempor velit quis dui venenatis porta.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
