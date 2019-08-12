import React, {useState, useEffect} from 'react';

function Timer(props) {
    const [time, setTime] = useState(900);
    const seconds = (time % 60);
    const minutes = Math.floor(time/60);
    useEffect(() => {
        setInterval(() => {
            setTime(newTime => newTime - 1);
        }, 1000);
    }, [])
    return(
        <div className="timer">{minutes}:{seconds}</div>
    );
}

export default Timer;