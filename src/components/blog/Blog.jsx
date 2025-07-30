// * styles imports *
import classes from './Blog.module.scss';

// * custom component imports *
import BlogItem from './blog-item/BlogItem';

function Blog() {
  return (
    <div>
      <div>Latest Blog Items</div>
      <BlogItem />
    </div>
  );
}

export default Blog;
