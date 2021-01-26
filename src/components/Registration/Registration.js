import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import TypeformRight from './Typeform_Widget/index';

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
