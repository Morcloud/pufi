import React from "react";
import { Header } from "../Header/Header";
// import hero from "./hero.jpg";
import "./hero.scss";

export const Hero = () => {
    return (
        <>
            <section
                className='hero'
                style={{ backgroundImage: `url(/hero.jpg)` }}
            >
                <Header />
                <h1 className='hero__title'>
                    estár cómodo,
                    <br /> nunca fue tan facil.
                </h1>
                <button className='hero__button'>shop</button>
                <div className='hero__slides'>
                    <div className='hero__slides--element'></div>
                    <div className='hero__slides--element'></div>
                    <div className='hero__slides--element'></div>
                </div>
            </section>
        </>
    );
};
