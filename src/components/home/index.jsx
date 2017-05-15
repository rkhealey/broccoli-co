import React, { PureComponent } from 'react';

import Button from '../button';
import InviteForm from '../invite-form';
import Modal from '../modal';
import Wrapper from '../wrapper';

import styles from './styles.sass';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { modalVisible: false };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  render() {
    return (
      <Wrapper className={styles.container}>
        <h1>A better way to enjoy every day.</h1>
        <h3>Be the first to know when we launch</h3>
        <Button onClick={this.openModal}>Request an invite</Button>
        <Modal isOpen={this.state.modalVisible} onClose={this.closeModal}>
          <InviteForm onClose={this.closeModal} />
        </Modal>
      </Wrapper>
    );
  }
}

export default Home;
