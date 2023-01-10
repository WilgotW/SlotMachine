import React, { useEffect } from "react"
import { useState } from "react";
import { FC } from "react"

import Cherry from '../images/Cherry.png';
import Orange from '../images/Orange.png';
import Clover from '../images/Clover.png';
import Diamond from '../images/Diamond.png';
import Seven from '../images/Seven.png';

interface IProps {
    number: number,
    activeImageNumber: number,
    animate: boolean,
    setAnimate: React.Dispatch<React.SetStateAction<boolean>>,
    check: () => void
}

const Slot = ({number, activeImageNumber, animate, setAnimate, check}: IProps) => {
    const images = [
        Cherry,
        Orange,
        Clover,
        Diamond,
        Seven
    ];

    const [timer, setTimer] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if(animate){
                if(count < 5){
                    setCount(prev => prev + 1);
                } else{
                    setCount(1);
                }

                if(timer > 30 - count){
                    stopAnimation();
                }
            }
            setTimer(prev => prev + 1);
            if(timer >= 31){
                setTimer(0);
            }
        }, 150)
    }, [timer])


    useEffect(() => {
        if(animate){
            startAnimation();
        }
    }, [animate])

    const startAnimation = () => {
        setTimer(0);
        
        setCount(1);
    }
    const stopAnimation = () => {
        setCount(0);
        setAnimate(false);
        
        check();
    }
    
    return (
        <div className="slot">
            <div style={{display: "flex", flexDirection: "column", background: "rgba(255, 255, 0, 0.5)", borderRadius: "30px"}}>
                {images &&
                    
                    <img src={count <= 0 ? images[activeImageNumber-1] : images[count-1]} alt="" />
                }
                <span>{number}</span>
            </div>
            
        </div>
    )
}

export default Slot