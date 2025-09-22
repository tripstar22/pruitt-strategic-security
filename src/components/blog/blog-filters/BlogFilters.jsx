// * bootstrap imports *
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// * styles imports *
import classes from '../Blog.module.scss';

function BlogFilters() {
  return (
    <Container>
      <Row>
        <Col>
          <div className={classes.blogfilters}>
            <span className={classes.blogfilters_label}>Filter by:</span>
            <select className={classes.blogfilters_select}>
              <option value="all">All Categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogFilters;
