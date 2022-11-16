import React,{useState} from 'react'
import styled from 'styled-components'
import { FaBars,FaMale } from "react-icons/fa";

const Container = styled.div`
max-width:100%;
height:100vh;
display:flex;
flex-direction:column;
`;
const Menu= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:60px;
margin-bottom:30px;
box-shadow:2px 2px 5px;
`;

const SubMenu = styled.a`
padding-top:10px;
margin-left:10px;
cursor:pointer;
`;

const ChildContainer = styled.div`
margin:20px;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
gap:10px;
`;
const ChildItem = styled.div`
width:300px;
height:250px;
display:flex;
justify-content:center;
align-items:center;
box-shadow:1px 1px 12px 0px;
border-radius:10px;
background:${props=>props.back}
`;

const data = [
  {
    id:1,
    name:"box1",
    background:"orange"
  },
  {
    id:2,
    name:"box2",
    background:"green"
  },
  {
    id:3,
    name:"box3",
    background:"yellow"
  },
  {
    id:4,
    name:"box4",
    background:"red"
  },
  {
    id:5,
    name:"box5",
    background:"blue"
  },
  {
    id:6,
    name:"box6",
    background:"purple"
  },
 
]
const Main= () =>{
  const[expandMenu,setExpandMenu] = useState(false);
  return(
    <Container>
   <Menu>
     <SubMenu>
     <FaBars font-size="25px"/>
     </SubMenu>
     <SubMenu>
     <h2>RoCodes</h2>
     </SubMenu>
     <SubMenu>
     <FaMale font-size="25px"/>
     </SubMenu>
   </Menu>
   <ChildContainer>
     { data?.map((item)=>(
     <ChildItem key={item.id} back={item.background}>
      {item.name}
     </ChildItem>
     ))
     }
   </ChildContainer>
    </Container>
  )
}
export default Main;