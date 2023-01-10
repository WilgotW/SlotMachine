import React, { FC } from "react";
import Button from '@mui/material/Button';

interface IProps {
    money: number,
    play: any,
    playLog: number[]
}

const SideBar = ({money, play, playLog}: IProps) => {
    return(
        <div style={{position: "absolute", width: "1300px", height: "100px", display: "flex", justifyContent: "right"}}>
            <div style={{width: "500px", height: "100%"}}>
                <h1>Money: {money}</h1>
                <Button variant="contained" onClick={play}>Play</Button>
                <div style={{overflowY: "scroll", display: "flex", flexDirection: "column", padding: "20px", maxHeight: "200px", minHeight: "150px"}}>
                    {playLog.map(log => <span style={{color: log < 0 ? "red" : "green"}}>{log}</span>)}
                </div>
            </div>
        </div>
    )
}

export default SideBar;