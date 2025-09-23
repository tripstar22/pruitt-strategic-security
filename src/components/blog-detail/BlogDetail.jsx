// * bootstrap imports *
import { Container, Row, Col } from 'react-bootstrap';

// * styles imports *
import classes from './BlogDetail.module.scss';

// * custom component imports *
import RelatedPosts from './related-posts/RelatedPosts';

function BlogDetail() {
  return (
    <div>
      <section>
        <div className={classes.blogdetail}>
          <h1 className={classes.blogdetail_title}>Quisque mattis dui quis orci laoreet tempor</h1>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <div className={classes.blogdetail}>
                <div className={classes.blogdetail_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc enim, lacinia et diam id, pulvinar fermentum nisl. Phasellus ac massa sollicitudin, finibus diam et, aliquam eros. Aenean nibh augue, cursus non volutpat nec, convallis nec erat. Duis feugiat tincidunt mollis. Fusce cursus finibus posuere. Aenean sed tincidunt purus. Aenean mollis quam et felis gravida, at aliquam risus lobortis. Cras vel congue lectus. Suspendisse tempor velit quis dui venenatis porta.</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <RelatedPosts />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BlogDetail;
