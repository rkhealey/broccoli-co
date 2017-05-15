import React from 'react';
import { shallow } from 'enzyme';

import Button from '../button';
import Modal from './';

describe('components/modal', () => {
  const simpleProps = {
    isOpen: false,
    onClose: jest.fn(),
  };

  it('renders with simple props', () => {
    const wrapper = shallow(<Modal {...simpleProps}>Modal!</Modal>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with isOpen', () => {
    const wrapper = shallow(<Modal {...simpleProps} isOpen>Modal!</Modal>);
    expect(wrapper).toMatchSnapshot();
  });

  it('fires onClose', () => {
    const wrapper = shallow(<Modal {...simpleProps} isOpen>Modal!</Modal>);
    wrapper.find(Button).simulate('click');
    expect(simpleProps.onClose).toHaveBeenCalledTimes(1);
  });
});
