// * third party library imports *
import PropTypes from 'prop-types';

// * react-bootstrap imports *
import Button from 'react-bootstrap/Button';

function ButtonLink(props) {
  const {
    children,
    className,
    href,
    rel,
    target,
  } = props;

  return (
    <Button
      className={className}
      href={href}
      rel={rel}
      target={target}
      variant="secondary"
    >
      {children}
    </Button>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
};

ButtonLink.defaultProps = {
  className: null,
  href: null,
  rel: null,
  target: null,
};

export default ButtonLink;
