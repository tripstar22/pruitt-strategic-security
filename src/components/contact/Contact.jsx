// * bootstrap imports *
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// * custom component imports *
import FormContact from '../forms/FormContact';

// * styles imports *
import classes from './Contact.module.scss';

function Contact() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className={classes.contact}>
              <h2>Contact</h2>
              <FormContact />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
