import React, { PropTypes } from 'react';

import Footer from '../footer';
import Header from '../header';

import styles from './styles.sass';

const AppWrapper = ({ children }) => (
  <div className={styles.appWrapper}>
    <Header />
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </div>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
