import React from "react";
import { Header } from "../Header/Header";
import testCover1 from "../../images/test-cover.jpg";
import testCover2 from "../../images/test-cover2.jpg";
import testCover3 from "../../images/test-cover3.jpg";
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
                    <div id='slider1' className='hero__slides--cover'>
                        <img src={testCover1} alt='Cover' />
                    </div>
                    <div id='slider2' className='hero__slides--cover'>
                        <img src={testCover2} alt='Cover' />
                    </div>
                    <div id='slider3' className='hero__slides--cover'>
                        <img src={testCover3} alt='Cover' />
                    </div>
                </div>
                <div className='hero__slides-buttons'>
                    <a
                        href='#slider1'
                        className='hero__slides-buttons--button'
                    ></a>
                    <a
                        href='#slider2'
                        className='hero__slides-buttons--button'
                    ></a>
                    <a
                        href='#slider3'
                        className='hero__slides-buttons--button'
                    ></a>
                </div>
            </section>
        </>
    );
};
