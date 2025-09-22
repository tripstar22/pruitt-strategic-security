// * bootstrap imports *
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// * styles imports *
import classes from './Testimonials.module.scss';

function Testimonials() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className={classes.testimonial}>
              <blockquote className={classes.testimonial_text}>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc enim, lacinia et diam id, pulvinar fermentum nisl. Phasellus ac massa sollicitudin, finibus diam et, aliquam eros. Aenean nibh augue, cursus non volutpat nec, convallis nec erat. Duis feugiat tincidunt mollis. Fusce cursus finibus posuere. Aenean sed tincidunt purus. Aenean mollis quam et felis gravida, at aliquam risus lobortis. Cras vel congue lectus. Suspendisse tempor velit quis dui venenatis porta.&rdquo;</blockquote>
              <p>&mdash; John Doe</p>
            </div>
          </Col>
          <Col>
            <div className={classes.testimonial}>
              <blockquote className={classes.testimonial_text}>&ldquo;Nullam dictum luctus eros. Praesent rhoncus felis eros, in tincidunt quam rhoncus sit amet. Donec a sodales turpis. Etiam orci dolor, malesuada placerat massa sit amet, consectetur mollis dolor. Integer sit amet interdum ligula. Suspendisse nec feugiat quam. Praesent lorem lorem, dictum et ultrices id, consectetur dapibus magna. Vestibulum efficitur odio nulla, quis congue arcu ultricies dictum. Ut nisl nisi, vehicula ac nisi a, pretium consequat magna.&rdquo;</blockquote>
              <p>&mdash; Jane Smith</p>
            </div>
          </Col>
          <Col>
            <div className={classes.testimonial}>
              <blockquote className={classes.testimonial_text}>&ldquo;Fusce sit amet felis ligula. Nullam eget mollis dui, quis tristique nibh. Duis ac libero in mi finibus pellentesque eget quis dui. Aliquam felis diam, convallis in sem sit amet, sodales eleifend eros. Vestibulum velit tortor, finibus vel aliquet at, lobortis vitae ligula. Nullam volutpat sollicitudin libero ut pharetra. Proin imperdiet auctor auctor. Phasellus quis laoreet dolor. In consectetur dolor sit amet risus lobortis, eget sagittis risus commodo.&rdquo;</blockquote>
              <p>&mdash; Tom Brown</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
