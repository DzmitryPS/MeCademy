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
    letter-spacing: 0.84px;
    font-family: Teko;
    font-size: 19px;
    height: 100%;
  }


  @media (max-width: 1000px) {

    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 100%;
    margin-top: 50px;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      height: 25px;
      margin: 5px 15px;
      padding-bottom:25px;
      border-bottom: 3px solid rgba(249,244,241,1.00);
      
    }

  
  }
 

   .reg_btn{
    display:none;   
    
    @media (max-width: 768px) {
      cursor: pointer;
      display:block;
      height: 5px;
      background-color:#4B9FA5;
     border-radius: 6px;
     text-align: center;
     padding-top: 10px;
     color: white;
     transition: background 0.5s ease;
    }

    :hover{
      background-color:#4ccad4;
    }
}


.reg_btn i{
  margin-left: 15px;
  display: inline-block;
  transition: 0.3s ease-in;
  }
  .reg_btn:hover i {
    transform: translateX(50%);
  }
`;

const Logo = styled.img`
    width: 130px;
    height: 40px;
    margin: 10px auto;

    @media (max-width: 1000px) {
      margin-left: 25px;
      
    }
    @media (max-width: 768px) {
      margin: auto;
      
    }
    
`;

const RegBtn = styled.button`
    cursor: pointer;
    width: 170px;
    height: 40px;
    background-color: #4B9FA5;
    border: none;
    border-radius: 50px;
    font-family: Teko;
    font-size: 16px;
    color: white;
    letter-spacing: 2px;
    margin-top: 8px;
    margin-right: 70px;
    transition: background 0.5s ease;

    @media (max-width: 768px) {
      display: none;
      
    }

    :hover{
      background-color:#4ccad4;
    }
  
`;



const RightNav = ({ open }) => {
  return (
    <>
    <Logo src={LogoSrc} />
    <Ul open={open}>
      <li className='reg_btn'>Registration<i class="fas fa-arrow-right"></i></li>
      <li>About</li>
      <li>Registration</li>
      <li>Couches</li>
      <li>Contact Us</li>
     
    </Ul>
    <RegBtn>Registration</RegBtn>
    </>
  )
}

export default RightNav