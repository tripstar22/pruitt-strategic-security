// * styles imports *
import classes from '../Blog.module.scss';

// * custom component imports *
import BlogFilters from '../blog-filters/BlogFilters';
import BlogItem from '../blog-item/BlogItem';

function BlogList() {
  return (
    <div>
      <div>Blog List</div>
      <BlogFilters />
      <BlogItem />
    </div>
  );
}

export default BlogList;
