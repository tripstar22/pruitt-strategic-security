// * third party library imports *
import PropTypes from 'prop-types';

// * react-bootstrap imports *
import Button from 'react-bootstrap/Button';

function ButtonAction(props) {
  const { children } = props;

  return <Button variant="primary">{children}</Button>;
}

ButtonAction.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonAction;
