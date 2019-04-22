import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_AUTH,
  USER_DESTROY,
  USER_LOGIN,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from './constants';

// Auth
export const userAuth = () => {
  return {
    type: USER_AUTH,
  }
}

export const userDestroy = () => {
  return {
    type: USER_DESTROY,
  }
}

export const userLoggedIn = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  }
}

export const userLoggedOut = () => {
  return {
    type: USER_LOGOUT,
  }
}

// Register
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

// Login
export const userLoginRequest = (user) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: user,
  }
}

export const userLoginSuccess = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  }
}

export const userLoginFailed = (errorMessage) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: errorMessage,
  }
}
