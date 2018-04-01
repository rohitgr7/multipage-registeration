import axios from 'axios';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from './types';

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

const loginFailed = () => ({
  type: LOGIN_FAILED,
  payload: 'Invalid email or password'
});

const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
  payload: 'Registeration successful. Please login.'
});

const registerFailed = () => ({
  type: REGISTER_FAILED,
  payload: 'Email is already registered'
});

export const loginUser = userDetails => async dispatch => {
  try {
    await axios.post('/auth/login', userDetails);
    dispatch(loginSuccess());
  } catch (e) {
    dispatch(loginFailed());
  }
};

export const registerUser = userDetails => async dispatch => {
  try {
    await axios.post('/auth/login', userDetails);
    dispatch(registerSuccess());
  } catch (e) {
    dispatch(registerFailed());
  }
};

export const fetchUser = () => async dispatch => {
  try {
    const user = await axios.get('/auth/user');
    if (user) {
      dispatch({ type: FETCH_USER_SUCCESS });
    } else {
      dispatch({ type: FETCH_USER_FAILED });
    }
  } catch (e) {
    dispatch({ type: FETCH_USER_FAILED });
  }
};
