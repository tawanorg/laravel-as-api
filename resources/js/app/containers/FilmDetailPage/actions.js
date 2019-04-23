import {
  REQUEST,
  SUCCESS,
  FAILED,
} from './constants';

// Register
export const request = (slug = null) => {
  return {
    type: REQUEST,
    payload: slug,
  }
}

export const success = (data) => {
  return {
    type: SUCCESS,
    payload: data,
  }
}

export const failed = (errorMessage) => {
  return {
    type: FAILED,
    payload: errorMessage,
  }
}
