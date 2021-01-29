import React from 'react'
import styled from 'styled-components';
import Popup from '../../reg_form/Popup_form';


const StyledRegForm = styled.div `
    height: 300px;
    width: 350px;
    position: relative;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    border-radius: 3px;
    margin-top: 65px;

    h1 {
    font-size: 2.6rem;
    }

    h1, h3 {
    margin: 20px;
    }
`

const MecademyReg = () => {
    return (
        <StyledRegForm>
        <div>
            <h1>MeCademy</h1>
            <h3>Lorem ipsum dolor sit amet</h3>
            <Popup/>
        </div>
        </StyledRegForm>
    )
}

export default MecademyReg;
