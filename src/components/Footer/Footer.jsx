import logo from "../../images/pufi-footer.png";
import QR from "../../images/qr.png";
import shield from "../../images/shield.png";

import "./footer.scss";

export const Footer = () => {
    return (
        <footer className='footer'>
            <figure className='footer__logo'>
                <img src={logo} alt='Logo pufi' />
            </figure>
            {/* <div className='footer__info'> */}
            <ul className='footer__list'>
                <li className='footer__list--item'>
                    <a href='/'>pufi rain</a>
                </li>
                <li className='footer__list--item'>
                    <a href='/'>pufi puff</a>
                </li>
                <li className='footer__list--item'>
                    <a href='/'>pufi cart</a>
                </li>
                <li className='footer__list--item'>
                    <a href='/'>pufi nap</a>
                </li>
            </ul>
            <ul className='footer__list'>
                <li className='footer__list--item'>
                    <a href='/'>contacto</a>
                </li>
                <li className='footer__list--item'>
                    <a href='/'>ayuda</a>
                </li>
                <li className='footer__list--item'>
                    <a href='/'>cómo comprar</a>
                </li>
                <li className='footer__list--item'>
                    <a href='/'>términos & condiciones</a>
                </li>
            </ul>
            <div className='footer__guarantee'>
                <p className='footer__guarantee--title'>compra 100% segura</p>
                <div className='footer__tags'>
                    <figure className='footer__tags--image'>
                        <img src={QR} alt='Código QR' />
                    </figure>
                    <figure className='footer__tags--image'>
                        <img src={shield} alt='shield' />
                    </figure>
                    <p className='footer__tags--info'>
                        compra con la garantia de pufi
                    </p>
                </div>
            </div>
            {/* </div> */}
            <div className='footer__social'>
                <p className='footer__social--text'>seguinos en</p>
                <p className='footer__social--text'>
                    <i className='fab fa-facebook-f'></i>
                </p>
                <p className='footer__social--text'>
                    <i className='fab fa-twitter'></i>
                </p>
                <p className='footer__social--text'>
                    <i className='fab fa-instagram'></i>
                </p>
            </div>
        </footer>
    );
};
