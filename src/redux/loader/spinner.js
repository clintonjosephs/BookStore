const spinnerState = { status: false };

const TOOGLE_SPINNER = 'BOOKSTORE/LOADER/TOOGLE_SPINNER';

// define actions

export const toogleSpinner = (payload) => ({
  type: TOOGLE_SPINNER,
  payload,
});

const spinnerReducer = (state = spinnerState, { type, payload }) => {
  switch (type) {
    case TOOGLE_SPINNER:
      return { status: payload };
    default:
      return state;
  }
};

export default spinnerReducer;
