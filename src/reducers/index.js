import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import inviteReducer from './invite';

export default combineReducers({
  invite: inviteReducer,
  form: formReducer,
});
