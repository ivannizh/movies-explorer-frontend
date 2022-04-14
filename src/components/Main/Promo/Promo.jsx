import NavTab from "../NavTab/NavTab";
import './Promo.css'
import '../Main.css'

function Promo () {
    return (
    <>
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button className='promo__know-more'>Узнать больше</button>
        </section>
        <NavTab />

    </>
    )
}

export default Promo;
