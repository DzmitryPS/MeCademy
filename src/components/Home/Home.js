import React from 'react';
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import styled from 'styled-components';
import Testimonial from './Testimonial/Testimonial';
import Popup from '../reg_form/Popup_form';



const TopDiv = styled.div`
position:relative;
  height: 440px;
  width:100%;
  background-image: url('https://i.ibb.co/W5xdF3Z/land.jpg');
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
  margin-top: -55px;
  z-index: -1;

`;

const MainDiv = styled.div`
 position:relative;
 margin: auto;
`;



const Home = () => {
    return (
        <div>
             <MetaDecorator
             description='Here is Home Page'
             title='My Home Page'
             />
             <TopDiv>
             </TopDiv>
              
            <MainDiv>
               <Popup/>
            </MainDiv>
            
        </div>
    )
}

export default Home
