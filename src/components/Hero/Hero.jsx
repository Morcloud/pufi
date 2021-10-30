import React from "react";
import { Header } from "../Header/Header";
import test from "../../images/test-cover.jpg";
// import hero from "./hero.jpg";
import "./hero.scss";

export const Hero = () => {
    return (
        <>
            <section className='hero'>
                <Header />
                <h1 className='hero__title'>
                    estár cómodo,
                    <br /> nunca fue tan facil.
                </h1>
                <button className='hero__button'>shop</button>
                <div className='hero__slides'>
                    <div className='hero__slides--cover'>
                        <img src={test} alt='images test' />
                    </div>
                    <div className='hero__slides--cover'>
                        <img src='' alt='' />
                    </div>
                    <div className='hero__slides--cover'>
                        <img src='' alt='' />
                    </div>
                </div>
                <div className='hero__slides-buttons'>
                    <input
                        type='radio'
                        className='hero__slides-buttons--button'
                    />
                    <input
                        type='radio'
                        className='hero__slides-buttons--button'
                    />
                    <input
                        type='radio'
                        className='hero__slides-buttons--button'
                    />
                </div>
            </section>
        </>
    );
};
