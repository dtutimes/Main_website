import React from "react";
import {useState, useEffect} from 'react';
import { Animated } from "react-animated-css";
import Quiz from './quiz';
import './countdown.scss';

const App = () => {
    React.useEffect(()=>{
        document.body.scrollTop = 0;
    },[]);
    const [repaintClass, setRepaintClass] = useState('');
    const [second, setSecond] = useState(3);
    let grid = [];

    useEffect(() => {
        if (second < -1) {
            return;
        }

        const timer1 = setTimeout(() => {
            setSecond( second - 1);
        }, 1500);

        const timer2 = setTimeout(() => {
            setRepaintClass(`repaint`);
        }, 1000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        }
    });

    useEffect(() => setRepaintClass(`number-${second}`), [second]);

    for (let x = 1; x <= 15; x ++) {
        for (let y = 1; y <= 9; y++) {
            grid.push(<div className={`x${x}-y${y}`}></div>);
        }
    }

    if (second <= -1) {
        return (
            <div>
                <Animated animationIn={"fadeIn"}>
                    <Quiz></Quiz>
                </Animated>
                
            </div>
        )
    }

    return (
        <div className="countdown">
            <div id="countdown-grid" className={repaintClass}>
                {grid}
            </div>
        </div>
    )
};

export default App;