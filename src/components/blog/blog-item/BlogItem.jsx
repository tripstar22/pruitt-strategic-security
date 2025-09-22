// * styles imports *
import classes from './BlogItem.module.scss';

function BlogItem() {
  return (
    <div className={classes.blogitem}>
      <div className={classes.blogitem_image} />
      <h5 className={classes.blogitem_title}>Orci varius natoque penatibus et magnis</h5>
      <p className={classes.blogitem_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nunc.</p>
      <a href="#" className={classes.blogitem_link}>Read More</a>
    </div>
  );
}

export default BlogItem;
