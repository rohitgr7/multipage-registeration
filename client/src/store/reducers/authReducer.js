import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  CLEAN_ERROR_MESSAGES
} from './../../actions';

const initialState = {
  user: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: true, errorMessage: '' };

    case LOGIN_FAILED:
      return {
        ...state,
        user: false,
        errorMessage: action.payload
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: false,
        errorMessage: ''
      };

    case REGISTER_FAILED:
      return {
        ...state,
        user: false,
        errorMessage: action.payload
      };

    case FETCH_USER_SUCCESS:
      return { ...state, user: true, errorMessage: '' };

    case FETCH_USER_FAILED:
      return { ...state, user: false, errorMessage: '' };

    case CLEAN_ERROR_MESSAGES:
      return { ...state, errorMessage: '' };

    default:
      return state;
  }
};
