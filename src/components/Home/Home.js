import React from 'react';
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import styled from 'styled-components';

const MainDiv = styled.div`
  position:relative;
  height: 440px;
  width:100%;
  background-image: url(https://i.ibb.co/W5xdF3Z/land.jpg);
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
  margin-top: -55px;
  z-index: -1;
`

const Home = () => {

    
    return (
        <div>
             <MetaDecorator
             description='Here is Home Page'
             title='My Home Page'
             />
             <MainDiv>

             </MainDiv>
             
            <p>Home sweet home</p>
        </div>
    )
}

export default Home
