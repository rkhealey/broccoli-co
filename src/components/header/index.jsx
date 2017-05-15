import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../wrapper';

import styles from './styles.sass';

const Header = () => (
  <div className={styles.header}>
    <Wrapper>
      <Link to="/">Broccoli &amp; Co.</Link>
    </Wrapper>
  </div>
);

export default Header;
