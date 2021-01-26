import React from 'react';
import testImages from './testImages';

function Dots(props) {
    return (
        <div className="all-dots">
            {testImages.map((slide, index) => (
                <span key={index}
                    className={`${
                    props.activeIndex === index ? "dot active-dot" : "dot"
                    }`}
                    onClick={(event) => props.onClick((event.target.value = index))}
                ></span>
            ))}
        </div>
    )
}

export default Dots;
