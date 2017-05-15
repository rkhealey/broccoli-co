import React from 'react';

import Icon from '../icon';

import styles from './styles.sass';

const Footer = () => (
  <div className={styles.footer}>
    <p>
      Made with <Icon className={styles.heart} name="heart" /> in Melbourne.<br />
      &#169; 2017 Broccoli &amp; Co. All rights reserved.
    </p>
  </div>
);

export default Footer;
