// * bootstrap imports *
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// * styles imports *
// import classes from '../Hero.module.scss';

function BlogIndexHero() {
  return (
    // <div className={`${classes.hero} ${classes.hero___blog}`}>
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Blog</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogIndexHero;
