import classNames from 'classnames';
import React, { PropTypes } from 'react';

import Button from '../button';
import Icon from '../icon';

import styles from './styles.sass';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={classNames(styles.container, { [styles.isOpen]: isOpen })}>
      {/* eslint-disable jsx-a11y/no-static-element-interactions */}
      <div
        onClick={onClose}
        className={styles.overlay}
      />
      {/* eslint-enable */}
      <div className={classNames(styles.modal, { [styles.isOpen]: isOpen })}>
        <Button className={styles.closeBtn} theme="transparent" onClick={onClose}>
          <Icon name="times" />
        </Button>
        {children}
      </div>
    </div>);
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
