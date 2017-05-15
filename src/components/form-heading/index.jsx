import React, { PropTypes } from 'react';

import styles from './styles.sass';

const FormHeading = ({ children }) => (
  <div className={styles.formHeading}>
    <h3>{children}</h3>
  </div>
);

FormHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormHeading;
