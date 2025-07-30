// * styles imports *
// import classes from './About.module.scss';

// * custom component imports *
import RelatedPosts from './related-posts/RelatedPosts';

function BlogDetail() {
  return (
    <div>
      <div>Blog Detail</div>
      <RelatedPosts />
    </div>
  );
}

export default BlogDetail;
