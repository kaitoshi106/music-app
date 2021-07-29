import React from 'react'

export default function Slider() {
    return (
        <div className="slider">
            <div className="slider__bar">
                <div className="slider__bar__fill" >
                    <span
                        className="slider__handle"
                        role="button"
                    ></span>
                </div>
            </div>
        </div>
    );
}
