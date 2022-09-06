import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Countdown = ({date}) => {
    const [countdownDate, setCountdownDate] = useState(
        new Date("12/25/2022").getTime()
    );

    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <Container>
            <Unit>
                <Amount>{state.days}</Amount>
                <Description>Days</Description>
            </Unit>
            <Unit>
                <Amount>{state.hours}</Amount>
                <Description>Hours</Description>
            </Unit>
            <Unit>
                <Amount>{state.minutes}</Amount>
                <Description>Minutes</Description>
            </Unit>
            <Unit>
                <Amount>{state.seconds}</Amount>
                <Description>Seconds</Description>
            </Unit>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 1rem;
`;

const Unit = styled.div`
    background-color: #e4e3e3;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.8);
    padding: 0.5rem 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 0.3rem;
`;

const Amount = styled.h1`
    font-size: 2rem;
`;

const Description = styled.p`
    opacity: 0.7;
    font-weight: 600;
    font-size: 1rem;
`;

export default Countdown;
