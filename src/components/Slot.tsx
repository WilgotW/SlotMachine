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
    setDoCheck: React.Dispatch<React.SetStateAction<boolean>>
}

const Slot = ({number, activeImageNumber, animate, setAnimate, setDoCheck}: IProps) => {
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
                if(count < 4){
                    setCount(prev => prev + 1);
                } else{
                    setCount(0);
                }

                if(timer > 30 - count){
                    stopAnimation();
                }
            }
            setTimer(prev => prev + 1);
            if(timer >= 31){
                setTimer(0);
            }
        }, 100)
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
        setCount(-1);
        setAnimate(false);
        
        setDoCheck(true);
    }
    
    return (
        <div className="slot">
            <div style={{display: "flex", flexDirection: "column", background: "rgba(255, 255, 0, 0.5)", borderRadius: "30px"}}>
                {images &&
                    
                    <img src={!animate ? images[activeImageNumber-1] : images[count]} alt="" />
                }
                <span>{number}</span>
            </div>
            
        </div>
    )
}

export default Slot