const initialState = {
  inputValue: ''
};
const initialPageNo = {
  pageNo: 1
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload
      };
    default:
      return state;
  }
};

 const pagingReducer = (state = initialPageNo, action) => {
  
  switch (action.type) {
    case 'SET_NEXT_PAGE':
      return {       
        pageNo: ++state.pageNo
      };
    case 'SET_PREV_PAGE':
      return {       
        pageNo: --state.pageNo
      };
    case 'RESET_PAGE':
      return {        
        pageNo: 1
      };
    default:
      return state;
  }
};

export default inputReducer 
export {pagingReducer};

