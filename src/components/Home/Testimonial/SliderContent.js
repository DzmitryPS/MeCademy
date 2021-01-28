import React from 'react'
import testImages from './testImages';
import styled from 'styled-components';

const StyledSliderContentForm = styled.div `

.active {
    display: inline-block;
}

.inactive {
    display: none;
}

.slides {
    height: 430px;
    width: 300px;
    position: relative;
}

.slide-image {
    display: block;
    width: 100px;
    height: 100px;
    margin: 20px auto 10px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid rgba(0, 0, 0, 0.26);
    object-fit: cover;
}

.slide-name, .slide-title, .slide-text {
    color: #6b7e88;
    display: flex;
    justify-content: center;
}

.slide-title {
    margin: 5px;
}

.slide-text {
    text-align: center;
    line-height: 1;
    margin: 30px;
    font-family: Open Sans,Arial,sans-serif;
}
`

function SliderContent(props) {
    return (
        <StyledSliderContentForm>
        <section>
            {testImages.map((slide, index) => (
                <div key={index}
                    className={index === props.activeIndex ? "slides active" : "inactive"}>
                    <img className="slide-image" src={slide.urls} alt="" />
                    <h4 className="slide-name">{slide.name}</h4> 
                    <h5 className="slide-title">{slide.title}</h5> 
                    <p className="slide-text">{slide.description}</p>
                </div>
            ))}
        </section>
        </StyledSliderContentForm>
    )
}

export default SliderContent;
