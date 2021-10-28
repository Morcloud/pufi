import "./contact.scss";

export const Contact = () => {
    return (
        <section className='contact'>
            <p className='contact--title'>newsletter</p>
            <h2 className='contact--subtitle'>suscribite</h2>
            <p className='contact--text'>Y enterate de todas las novedades</p>
            <div className='contact__form'>
                <input
                    className='contact__form--input'
                    type='text'
                    placeholder='Ingresa tu email'
                />
            </div>
        </section>
    );
};
