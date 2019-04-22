export const initialState = {
  currentDate: new Date().toISOString().slice(0, 10),
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

