import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.sass';

const Wrapper = ({ children, className }) => (
  <div className={classNames(styles.wrapper, className)}>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Wrapper.defaultProps = {
  className: null,
};

export default Wrapper;
