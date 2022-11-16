import React from "react";
import "./style.css";
import Main from './Main'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const Container = styled.div`
width:100%;
height:auto;
display:flex;

`;
const Left = styled.div`

flex:1;
box-shadow:1px 2px 5px;
height:auto;
`;
const Right= styled.div`
flex:8;
`;

export default function App() {
  return (
    <Container>
     <Left><Sidebar/></Left>
     <Right><Main/></Right>
    </Container>
  );
}
