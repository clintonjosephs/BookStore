const spinnerState = false;

const TOOGLE_SPINNER = 'BOOKSTORE/LOADER/TOOGLE_SPINNER';

// define actions

export const toogleSpinner = () => ({
  type: TOOGLE_SPINNER,
});

const spinnerReducer = (state = spinnerState, { type }) => {
  switch (type) {
    case TOOGLE_SPINNER:
      return !state;
    default:
      return state;
  }
};

export default spinnerReducer;
