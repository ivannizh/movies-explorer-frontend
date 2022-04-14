import './Header.css';
import {Link, Route, Routes} from "react-router-dom";

const logo = require('../../images/logo.png')

function Header() {
    return (
        <Routes>
            <Route path='/' element={
                <header className='header'>
                    <img className='header__logo' src={logo} alt='logo'/>
                    <div className='header__buttons'>
                        <button className='header__button'>Регистрация</button>
                        <button className='header__button header__button_green'>Войти</button>
                    </div>
                </header>
            }/>
            <Route path='*' element={<></>}/>
        </Routes>

    )
}

export default Header;
