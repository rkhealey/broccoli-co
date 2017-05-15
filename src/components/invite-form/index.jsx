import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import React, { PropTypes, PureComponent } from 'react';

import Button from '../button';
import FormHeading from '../form-heading';
import FormSuccess from '../form-success';
import Icon from '../icon';

import InviteActionCreators from '../../actions/invite';
import validate from './validate';

import styles from './styles.sass';

class InviteForm extends PureComponent {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  onSubmit(values) {
    const { actions: { requestInvite } } = this.props;
    return requestInvite(values);
  }

  renderField({ input, label, type, meta: { touched, error } }) { // eslint-disable-line class-methods-use-this
    const errorClassName = touched && !_.isUndefined(error);
    return (
      <div className={styles.field}>
        <label htmlFor={input.name}>{label}</label>
        <input {...input} type={type} className={errorClassName ? styles.error : null} />
      </div>
    );
  }

  render() {
    const { error, handleSubmit, onClose, submitting, submitted, submitFailed, submitSucceeded } = this.props;
    return (
      <div>
        {
          (!submitted || submitFailed) &&
          <div>
            <FormHeading>Request an invite</FormHeading>
            <form className={styles.form} onSubmit={handleSubmit(this.onSubmit)}>
              {submitting ? (
                <div className={styles.spinner}>
                  <Icon name="spinner fa-3x" pulse />
                </div>
              ) : (
                <div>
                  <Field
                    component={this.renderField}
                    name="name"
                    label="Full Name"
                    type="text"
                    placeholder="Full Name"
                  />
                  <Field
                    component={this.renderField}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                  />
                  <Field
                    component={this.renderField}
                    name="confirmEmail"
                    label="Confirm email"
                    type="email"
                    placeholder="Confirm email"
                  />
                </div>
              )}
              <Button
                className={styles.submitBtn}
                type="submit"
                onClick={handleSubmit(this.onSubmit)}
              >
                {submitting ? 'Sending, please wait' : 'Send'}
              </Button>
              {submitFailed && error && <p className={styles.errorMsg}>{error}</p>}
            </form>
          </div>
        }
        {
          submitted && submitSucceeded &&
          <FormSuccess onClick={onClose} />
        }
      </div>
    );
  }
}

InviteForm.propTypes = {
  actions: PropTypes.shape({
    requestInvite: PropTypes.func.isRequired,
  }).isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
};

InviteForm.defaultProps = {
  error: undefined,
};

const mapStateToProps = state => ({
  errorMsg: state.invite.error,
  submitted: state.invite.submitted,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(InviteActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(reduxForm({
    form: 'invite',
    validate,
  })(InviteForm));

export { InviteForm as InviteFormForTest };
