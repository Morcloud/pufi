import logo from "../../images/pufi.png";
import iconPuff from "../../images/pufi-puff.png";

import "./header.scss";

export const Header = () => {
    return (
        <header className='header'>
            <figure className='header__logo'>
                <img src={logo} alt='Logo pufi' />
            </figure>
            <nav className='header__nav'>
                <ul className='nav__list'>
                    <li className='nav__list-item'>
                        <img src={iconPuff} alt='' />
                        <a href='/'>pufi puff</a>
                    </li>
                    <li className='nav__list-item'>
                        <i>icono</i>
                        <a href='/'>pufi rain</a>
                    </li>
                    <li className='nav__list-item'>
                        <i>icono</i>
                        <a href='/'>pufi cart</a>
                    </li>
                    <li className='nav__list-item'>
                        <i>icono</i>
                        <a href='/'>pufi nap</a>
                    </li>
                </ul>
            </nav>
            <div className='header__menu'>
                <p>
                    mi cuenta <i className='fas fa-angle-down'></i>{" "}
                </p>
                <p>mi compra</p>
            </div>
        </header>
    );
};
