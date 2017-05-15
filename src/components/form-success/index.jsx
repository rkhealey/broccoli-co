import React, { PropTypes } from 'react';

import Button from '../button';
import FormHeading from '../form-heading';

import styles from './styles.sass';

const FormSuccess = ({ onClick }) => (
  <div className={styles.container}>
    <FormHeading>All done!</FormHeading>
    <p>You will be one of the first to experience Broccoli&nbsp;&amp;&nbsp;Co. when we launch.</p>
    <Button onClick={onClick}>OK</Button>
  </div>
);

FormSuccess.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FormSuccess;
