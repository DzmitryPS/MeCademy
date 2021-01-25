import React from 'react';
import MetaDecorator from '../MetaDecorator/MetaDecorator';

const Home = () => {
    return (
        <div>
             <MetaDecorator
             description='Here is Home Page'
             title='My Home Page'
             />
            <p>Home sweet home</p>
        </div>
    )
}

export default Home
