import _ from 'lodash';
import React from 'react';
import { shallow } from 'enzyme';

import { InviteFormForTest as InviteForm } from './';
import FormSuccess from '../form-success';

describe('components/invite-form', () => {
  const simpleProps = {
    actions: {
      requestInvite: _.noop,
    },
    error: undefined,
    handleSubmit: jest.fn(),
    onClose: jest.fn(),
    submitting: false,
    submitted: false,
    submitFailed: false,
    submitSucceeded: false,
  };

  it('renders with simple props', () => {
    const wrapper = shallow(<InviteForm {...simpleProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with error', () => {
    const wrapper = shallow(<InviteForm {...simpleProps} error="Oops" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with submitted and submitSucceeded', () => {
    const wrapper = shallow(<InviteForm {...simpleProps} submitted submitSucceeded />);
    expect(wrapper.find(FormSuccess)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('fires the onClose', () => {
    const wrapper = shallow(<InviteForm {...simpleProps} submitted submitSucceeded />);
    wrapper.find(FormSuccess).simulate('click');
    expect(simpleProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('renders with submitFailed', () => {
    const wrapper = shallow(
      <InviteForm {...simpleProps} submitFailed error="Oops" />);
    expect(wrapper.find(FormSuccess)).toHaveLength(0);
    expect(wrapper.find('.errorMsg').text()).toEqual('Oops');
    expect(wrapper).toMatchSnapshot();
  });

  describe('submit form', () => {
    const actions = {
      requestInvite: jest.fn(),
    };
    const formValues = {
      name: 'John Smith',
      email: 'john@test.com',
    };

    const handleSubmit = cb => () => cb(formValues);

    it('submits the form', () => {
      const wrapper = shallow(<InviteForm {...simpleProps} actions={actions} handleSubmit={handleSubmit} />);
      const form = wrapper.find('form').at(0);
      expect(actions.requestInvite).toHaveBeenCalledTimes(0);
      form.simulate('submit');
      expect(actions.requestInvite).toHaveBeenCalledTimes(1);
      expect(actions.requestInvite).toHaveBeenCalledWith({
        name: 'John Smith',
        email: 'john@test.com',
      });
    });
  });
});
