import React from 'react';
import Cycle9Button from '../../components/Cycle9Button/index.js';

//Page component aka a parent and the buttons are child components
const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Cycle9Button buttonName= 'next'/>
            <Cycle9Button buttonName= 'back'/>
        </div>
    )
};

export default HomePage;