import React from 'react';
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import styled from 'styled-components';
<<<<<<< HEAD
import Popup from '../reg_form/Popup_form';



=======
import Testimonial from './Testimonial/Testimonial';
import MecademyReg from './MecademyReg';




>>>>>>> 4a864c1a6b99098fd8fba365d36c06cf36f1fe32
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
<<<<<<< HEAD

`;

const MainDiv = styled.div`
 position:relative;
 margin: auto;
`;


=======
>>>>>>> 4a864c1a6b99098fd8fba365d36c06cf36f1fe32

`;

const MainDiv = styled.div`
  position:relative;
  margin-top: 50px;

  .home__form{
  display: flex;
  justify-content:space-evenly;
  margin-top: 50px;

  @media screen and (max-width: 751px){
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  }}

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
<<<<<<< HEAD
               <Popup/>
=======
                <div className='home__form'>
               <Testimonial/>
               <MecademyReg/>
               </div>
>>>>>>> 4a864c1a6b99098fd8fba365d36c06cf36f1fe32
            </MainDiv>
            
        </div>
    )
}

export default Home
