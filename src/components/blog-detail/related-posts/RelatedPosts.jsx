// * custom component imports *
import BlogItem from '../../blog/blog-item/BlogItem';

function RelatedPosts() {
  return (
    <div>
      <div>
        <h3>Related Posts</h3>
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}

export default RelatedPosts;
