import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import TypeformRight from './components/Typeform_Widget';
import Typeform from './components/Typeform4';
import TypeformFullScreen from './components/Typeform4';

const Registration = () => {
    return (
        <div>
            <MetaDecorator
             description='Registration'
             title='Register Here'
             />
            <p>Hola! Register here</p>
            <TypeformRight />
        </div>
    )
}

export default Registration
