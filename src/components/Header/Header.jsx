import logo from "../../images/pufi.png";
import iconPuff from "../../images/pufi-puff.png";
import iconUmbrella from "../../images/umbrella.png";
import iconCart from "../../images/cart.png";
import iconNap from "../../images/nap.png";

import "./header.scss";

export const Header = () => {
    return (
        <header className='header'>
            <figure className='header__logo'>
                <img src={logo} alt='Logo pufi' />
            </figure>
            <nav className='header__nav'>
                <ul className='nav__list'>
                    <li className='nav__list--item'>
                        <img src={iconPuff} alt='' />
                        <a href='/'>pufi puff</a>
                    </li>
                    <li className='nav__list--item'>
                        <img src={iconUmbrella} alt='' />
                        <a href='/'>pufi rain</a>
                    </li>
                    <li className='nav__list--item'>
                        <img src={iconCart} alt='' />
                        <a href='/'>pufi cart</a>
                    </li>
                    <li className='nav__list--item'>
                        <img src={iconNap} alt='' />
                        <a href='/'>pufi nap</a>
                    </li>
                </ul>
            </nav>
            <div className='header__menu'>
                <p>
                    mi cuenta <i className='fas fa-angle-down'></i>
                </p>
                <p>mi compra</p>
            </div>
        </header>
    );
};
