import React, { useEffect } from "react"
import { useState } from "react";
import { FC } from "react"

import Cherry from '../images/Cherry.png';
import Orange from '../images/Orange.png';
import Clover from '../images/Clover.png';
import Diamond from '../images/Diamond.png';
import Seven from '../images/Seven.png';

interface slot {
    number: number,
    activeImageNumber: number,
    animate: boolean,
    setAnimate: any,
    check: any
}

const Slot:FC<slot> = (props) => {
    const [images, setImages] = useState([
        Cherry,
        Orange,
        Clover,
        Diamond,
        Seven
    ]);

    const [timer, setTimer] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if(props.animate){
                if(count < 5){
                    setCount(prev => prev + 1);
                }else{
                    setCount(1);
                }

                setTimer(prev => prev + 1);
                if(timer > 30){
                    stopAnimation();
                }
            }
        }, 100)
    }, [timer])


    useEffect(() => {
        if(props.animate){
            startAnimation();
        }
    }, [props.animate])

    const startAnimation = () => {
        
        setCount(1);
        setTimer(0);
    }
    const stopAnimation = () => {
        setCount(0);
        props.setAnimate(false);
        
        props.check();
    }
    
    return (
        <div className="slot">
            <div style={{display: "flex", flexDirection: "column", background: "rgba(255, 255, 0, 0.5)", borderRadius: "30px"}}>
                {images &&
                    
                    <img src={count <= 0 ? images[props.activeImageNumber-1] : images[count-1]} alt="" />
                }
                <span>{props.number}</span>
            </div>
            
        </div>
    )
}

export default Slot