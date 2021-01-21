import React from 'react';
import styled from 'styled-components';
import LogoSrc from './images/Logo.PNG';

const Ul = styled.ul`
  margin: auto;
  list-style: none;
  display: flex;
  width: 60%;
  flex-flow: row nowrap;
  justify-content: space-around;


  li {
    padding: 18px 10px;
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const Logo = styled.img`
    width: 130px;
    height: 40px;
    margin: 10px;
    
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <Logo src={LogoSrc} />
      <li>About</li>
      <li>Registration</li>
      <li>Couches</li>
      <li>Contact US</li>
    </Ul>
  )
}

export default RightNav