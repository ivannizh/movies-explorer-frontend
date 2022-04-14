import './AboutProject.css'
import '../Main.css'

function AboutProject() {
    return (
        <section className='section__about'>
             <h2 className='about__header'>О проекте</h2>
             <hr className='about__line' />
             <div className='about__blocks'>
                 <div className='about__block'>
                     <p className='about__block-header'>Дипломный проект включал 5 этапов</p>
                     <p className='about__block-text'>Составление плана, работу над бэкендом, вёрстку, добавление
                         функциональности и финальные доработки.</p>
                 </div>

                 <div className='about__block'>
                     <p className='about__block-header'>На выполнение диплома ушло 5 недель</p>
                     <p className='about__block-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                         было соблюдать, чтобы успешно защититься.</p>
                 </div>
             </div>
            <ul className='about__duration-table'>
                <li className='about__duration-li'>
                    <p className='about__duration-time about__duration-time_green'>1 неделя</p>
                    <p className='about__duration-part'>Back-end</p>
                </li>
                <li className='about__duration-li'>
                    <p className='about__duration-time'>4 неделя</p>
                    <p className='about__duration-part'>Front-end</p>
                </li>
            </ul>
         </section>
    )
}

export default AboutProject;
