import React, { useState, useEffect } from 'react';
import testImages from './testImages';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import styled from 'styled-components';

const StyledSliderForm = styled.div `
    
.slider-container {
    height: 450px;
    width: 300px;
    position: relative;
    background-color: #f5f5f5;
    overflow: hidden;
}
`

const len = testImages.length - 1;

function Slider() {

        const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        },5000);
        return () => clearInterval(interval);
        },[activeIndex]);

    return (
        <StyledSliderForm>
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} />
            <Arrows 
                prevSlide = {() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                
                nextSlide = {() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots 
                activeIndex={activeIndex}
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
        </StyledSliderForm>
    )
}

export default Slider;
