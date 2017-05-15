import _ from 'lodash';
import { SubmissionError } from 'redux-form';
import axios from 'axios';

export const INVITE_FORM_SUCCESS = 'INVITE_FORM_SUCCESS';
export const INVITE_FORM_ERROR = 'INVITE_FORM_ERROR';

const API_URL = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

const requestInvite = ({ name, email }) => dispatch =>
  new Promise((resolve, reject) => {
    axios.post(`${API_URL}`, { name, email }, {
      validateStatus: status => status >= 200 && status < 401,
    })
      .then((response) => {
        if (response.data.errorMessage) {
          const error = _.get(response, 'data.errorMessage', 'Something went wrong! Please try again.');
          dispatch({ type: INVITE_FORM_ERROR, error });
          const errObj = new SubmissionError({
            _error: error,
          });
          reject(errObj);
        }
        dispatch({ type: INVITE_FORM_SUCCESS });
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        if (error instanceof SubmissionError) reject(error);
        dispatch({ type: INVITE_FORM_ERROR, error });
      });
  });

export default {
  requestInvite,
};
