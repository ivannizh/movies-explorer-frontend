import './Footer.css'

function Footer() {
    return (
        <footer className='footer__section'>
            <p className='footer__copyright'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className='footer__line'/>
            <div className='footer__links-line'>
                <p className='footer__year'>&#169; 2022</p>
                <ul className='footer__links'>
                    <li className='footer__li'><a className='footer__link'>Яндекс.Практикум</a></li>
                    <li className='footer__li'><a className='footer__link'>Github</a></li>
                    <li className='footer__li'><a className='footer__link'>Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
