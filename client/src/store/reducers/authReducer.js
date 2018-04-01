import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from './../../actions';

const initialState = {
  auth: false,
  errorMessage: '',
  successMessage: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, auth: true, errorMessage: '', successMessage: '' };
    case LOGIN_FAILED:
      return {
        ...state,
        auth: false,
        errorMessage: payload,
        successMessage: ''
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: false,
        errorMessage: '',
        successMessage: payload
      };
    case REGISTER_FAILED:
      return {
        ...state,
        auth: false,
        errorMessage: payload,
        successMessage: ''
      };
    case FETCH_USER_SUCCESS: {
      return { ...state, user: true, errorMessage: '', successMessage: '' };
    }
    case FETCH_USER_FAILED:
      return { ...state, user: false, errorMessage: '', successMessage: '' };
    default:
      return state;
  }
};
