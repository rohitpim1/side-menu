import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
height:100vh;
`;
const NavHeading = styled.h2`
width:100%;
text-align:center;
padding:10px;

border-bottom:0.5px solid grey;
`;

const NavList = styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`;
const NavItem = styled.a`
width:100%;
padding:5px;
display:inline-block;
margin-bottom:15px;
font-size:1.2rem;
color:grey;
font-weight:700;
cursor:pointer;
background:#fff;
transition:background 1s ease;
&:hover{
 

  background:grey;
}
`;
const NavFooter = styled.h5`
position:absolute;
bottom:0;
left:0;
right:0
`;

const Sidebar = () =>{
  return(
    <Nav>
    <NavHeading>RohCodes</NavHeading>
    <NavList>
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Service</NavItem>
      <NavItem>Settings</NavItem>
      <NavItem>Cotact</NavItem>
     </NavList>
     <NavFooter>copyright @2022</NavFooter>
    </Nav>
  )
}
export default Sidebar;