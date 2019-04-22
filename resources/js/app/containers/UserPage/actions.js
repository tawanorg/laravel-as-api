import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from './constants';

export const userRegisterRequest = (user) => {
  return {
    type: USER_REGISTER_REQUEST,
    payload: user,
  }
}

export const userRegisterSuccess = (user) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: user,
  }
}

export const userRegisterFailed = (errorMessage) => {
  return {
    type: USER_REGISTER_FAILED,
    payload: errorMessage,
  }
}
