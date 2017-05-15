import {
  INVITE_FORM_SUCCESS,
  INVITE_FORM_ERROR,
} from '../../actions/invite';

const initialState = {
  submitted: false,
  error: undefined,
};

export default function inviteReducer(state = initialState, action = {}) {
  const reducers = {
    [INVITE_FORM_SUCCESS]: () => ({
      ...state,
      submitted: true,
    }),

    [INVITE_FORM_ERROR]: () => ({
      ...state,
      submitted: false,
      error: action.error,
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
}
