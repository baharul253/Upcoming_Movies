import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../Redux/Action/Action';
import { SearchbarContainer, InputField } from "./StyledComponent";
function SearchBar() {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.input.inputValue);
  return (
   <SearchbarContainer>   
    <InputField type= 'text' className='' placeholder='Search' value={inputValue} onChange={e=>dispatch(setInputValue(e.target.value))}/>
     <span class="material-icons search-icon">search</span> 
    </SearchbarContainer>
  )
}

export default SearchBar