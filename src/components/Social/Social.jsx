import imageTest from "../../images/Holidays.jpg";

import "./social.scss";

export const Social = () => {
    return (
        <section className='social'>
            <div className='social__details'>
                <p className='social__details--instagram'>instagram</p>
                <h2 className='social__details--hashtag'>#espufi</h2>
            </div>
            <div className='social__grid'>
                <figure className='social__grid--image'>
                    <img src={imageTest} alt='' />
                </figure>
                <figure className='social__grid--image'>
                    <img src={imageTest} alt='' />
                </figure>
                <figure className='social__grid--image'>
                    <img src={imageTest} alt='' />
                </figure>
                <figure className='social__grid--image'>
                    <img src={imageTest} alt='' />
                </figure>
                <figure className='social__grid--image'>
                    <img src={imageTest} alt='' />
                </figure>
                <figure className='social__grid--image'>
                    <img src={imageTest} alt='' />
                </figure>
            </div>
        </section>
    );
};
