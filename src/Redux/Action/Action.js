export const setInputValue = (value) => ({
  type: 'SET_INPUT_VALUE',
  payload: value
});

export const nextPage = () => ({
  type: 'SET_NEXT_PAGE'
});
export const previousPage = () => ({
  type: 'SET_PREV_PAGE'
});
export const resetPage = () => ({
  type: 'RESET_PAGE'
 
});
