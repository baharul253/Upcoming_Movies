import React from 'react'
import { useNavigate } from 'react-router-dom';
const HeaderHome = () => {
  const navigate = useNavigate();
  const homeIconClickHandler=()=>{    
    navigate('/MovieList')
  }
  return (
    <div>
    <span class="material-icons" onClick={homeIconClickHandler}>home</span>
   
   </div>
  )
}

export default HeaderHome