import React from "react"
import { useState } from "react";
import { FC } from "react"

import Cherry from '../images/Cherry.png';
import Orange from '../images/Orange.png';
import Clover from '../images/Clover.png';
import Diamond from '../images/Diamond.png';
import Seven from '../images/Seven.png';

interface SlotNumber {
    number: number,
    activeImageNumber: number
}

const Slot:FC<SlotNumber> = (props) => {
    const [images, setImages] = useState([
        Cherry,
        Orange,
        Clover,
        Diamond,
        Seven
    ]);
    
    return (
        <div className="slot">
            {images &&
                <img src={images[props.activeImageNumber-1]} alt="" />
            }
            <span>{props.number}</span>
            
        </div>
    )
}

export default Slot