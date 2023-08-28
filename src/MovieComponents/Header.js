import React from 'react'
import HeaderHome from './HeaderHome'
import { ParentContainer,SearchDiv,HomeDiv } from "./StyledComponent";
function Header({compOne,compTwo}){
  
  return (
    <ParentContainer>    
    {compOne&&<SearchDiv>{compOne}</SearchDiv>}
    {compTwo&&<SearchDiv>{compTwo}</SearchDiv>}    
    <HomeDiv>
      <HeaderHome/>
    </HomeDiv>
    </ParentContainer>
  )
}

export default Header