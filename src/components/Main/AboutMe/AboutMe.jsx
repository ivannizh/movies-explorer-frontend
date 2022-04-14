import './AboutMe.css'

const ava = require('../../../images/ava.png')

function AboutMe() {
    return (
        <section className='about-me__section'>
            <h2 className='about-me__header'>Студент</h2>
            <hr className='about-me__header-line'/>
            <p className='about-me__title'>Иван</p>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 25 лет</p>
            <p className='about-me__text'>Я родился и живу в Москве, закончил факультет кибернетики НИЯУ МИФИ, а затем магистратуру в МИЭМ НИУ ВШЭ.
                Я люблю слушать музыку, а ещё увлекаюсь фитнес залом. Люблю программировать со школы. Участвовал во многих соревнованиях и олимпиадах.
                Работаю backend разработчиком, а фронт это для души.</p>
            <img src={ava} alt='аватар' className='about-me__avatar'/>
            <div className='about-me__social-links'>
                <a href='#' className='about-me__social-link'>Facebook</a>
                <a href='#' className='about-me__social-link'>Github</a>
            </div>
            <h4 className='about-me__portfolio'>Портфолио</h4>

            <div className='about-me__links-block'>
                <a href='#' className='about-me__link'>Статичный сайт</a>
                <hr className='about-me__links-line'/>
                <a href='#' className='about-me__link'>Адаптивный сайт</a>
                <hr className='about-me__links-line'/>
                <a href='#' className='about-me__link'>Одностраничное приложение</a>
            </div>
        </section>
    )
}

export default AboutMe;
