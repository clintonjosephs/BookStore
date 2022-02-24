// declare initial state
const themeState = localStorage.getItem('storeTheme')
  ? JSON.parse(localStorage.getItem('storeTheme'))
  : { theme: 'light' };

const THEME_TOOGLE = 'BOOKSTORE/BOOKS/THEME_TOOGLE';

// actions

export const toogleTheme = (payload) => ({
  type: THEME_TOOGLE,
  payload,
});

// reducers

const themeReducer = (state = themeState, { type, payload }) => {
  switch (type) {
    case THEME_TOOGLE:
      return { theme: payload };
    default:
      return state;
  }
};

export default themeReducer;
