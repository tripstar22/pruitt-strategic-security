// * bootstrap imports *
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// * styles imports *
import classes from './Blog.module.scss';

// * custom component imports *
import BlogItem from './blog-item/BlogItem';

function Blog() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2>Latest Blog Posts</h2>
            <div className={classes.blog}>
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
            <div className={classes.blog_cta}>
              <a href="/blog/blog-index" className={classes.blog_cta_link}>View All Posts</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
