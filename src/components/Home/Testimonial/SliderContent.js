import React from 'react'
import testImages from './testImages';

function SliderContent(props) {
    return (
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
    )
}

export default SliderContent;
