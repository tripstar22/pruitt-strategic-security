// * bootstrap imports *
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// * styles imports *
import classes from '../Blog.module.scss';

// * custom component imports *
import BlogFilters from '../blog-filters/BlogFilters';
import BlogItem from '../blog-item/BlogItem';

function BlogList() {
  return (
    <section>
      <BlogFilters />
      <Container>
        <Row>
          <Col>
            <div className={classes.bloglist}>
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
            <div className={classes.bloglist_more}>
              <button type="button" className={classes.bloglist_more_btn}>Load More Posts</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BlogList;
