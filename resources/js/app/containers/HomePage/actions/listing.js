import {
  FILM_LISTING_REQUEST,
  FILM_LISTING_SUCCESS,
  FILM_LISTING_FAILED,
} from '../constants'

export const request = (page = 1) => {
  return {
    type: FILM_LISTING_REQUEST,
    payload: page
  }
}

export const success = ({ data, pagination }) => {
  return {
    type: FILM_LISTING_SUCCESS,
    payload: { data, pagination }
  }
}

export const failed = (errorMessage) => {
  return {
    type: FILM_LISTING_FAILED,
    payload: errorMessage
  }
}
