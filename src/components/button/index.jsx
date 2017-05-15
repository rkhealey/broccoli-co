import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.sass';

const Button = ({ children, className, onClick, theme }) => (
  /* eslint-disable jsx-a11y/href-no-hash */
  <a href="#" onClick={onClick} className={classNames(styles.button, styles[theme], className)}>
    {children}
  </a>
  /* eslint-enable */
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['default', 'transparent']),
};

Button.defaultProps = {
  className: null,
  theme: 'default',
};

export default Button;
