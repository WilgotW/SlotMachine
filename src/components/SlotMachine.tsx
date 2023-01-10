import React, { useEffect } from 'react'
import { useState } from 'react';
import { FC } from 'react';
import SideBar from './SideBar';
import Slot from './Slot';

const SlotMachine:FC = (props) => {
    const prices = [
        3, 10, 25, 35, 100
    ]
    const [numbers, setNumbers] = useState<number[]>([])
    const [slotCount, setSlotCount] = useState(3);
    const [money, setMoney] = useState(60);
    const [playLog, setPlayLog] = useState<number[]>([]);

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const newArr: number[] = [];
        for (let i = 0; i < slotCount; i++) {
            newArr[i] = randomNum(1, 5);
        }
        setNumbers(newArr);
    }, [])

    const play = () => {
        if(money <= 0) return;
        setAnimate(true);
        setMoney(prev => prev - 1);
    }
    const check = () => {

        const newArr: number[] = [];
        for (let i = 0; i < slotCount; i++) {
            newArr[i] = randomNum(1, 5);
        }
        setNumbers(newArr);

        console.log(newArr[0])
        if(checkAllEqual(newArr)){
            if(newArr[0] == 5){
                win(prices[newArr[0]], `Jackpot!: ${newArr[0]}. You Get ${prices[newArr[0]]}`)
            }else{
                win(prices[newArr[0]], `you won with number ${newArr[0]}. You Get ${prices[newArr[0]]}`);
            }
            
            setPlayLog([
                prices[newArr[0]],
                ...playLog
            ])
        }else{
            setPlayLog([
                -1,
                ...playLog
            ])
        }
    }

    function win(winNumber: number, winMessage: string) {
        console.log(winMessage);
        setMoney(prev => prev + prices[winNumber-1]);
    }

    function checkAllEqual(arr: number[]): boolean { return arr.every(n => n === arr[0])}

    function randomNum(min: number, max: number): number {return Math.floor(Math.random() * (max-min + 1) + min)}

    return (
        <div className='center'>
            <div>
                <SideBar money={money} play={play} playLog={playLog} />
                <div className='slot-bar'>
                    {numbers.map(n => <Slot number={n} activeImageNumber={n} animate={animate} setAnimate={setAnimate} check={check}/>)}
                </div>
                <div style={{display:"flex", flexDirection: "column"}}>
                    <h2>Prices:</h2>
                    <div className='center'>
                        <div style={{display: "flex", justifyContent: "space-around", background: "brown", height: "180px", alignItems: "center", width: "800px", borderRadius: "20px"}}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <img src={require('../images/Cherry.png')} alt="" />
                                <span><b>3</b></span>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <img src={require('../images/Orange.png')} alt="" />
                                <span><b>10</b></span>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <img src={require('../images/Clover.png')} alt="" />
                                <span><b>25</b></span>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <img src={require('../images/Diamond.png')} alt="" />
                                <span><b>45</b></span>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <img src={require('../images/Seven.png')} alt="" />
                                <span><b>100</b></span>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlotMachine;