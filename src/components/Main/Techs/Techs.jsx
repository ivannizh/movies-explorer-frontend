import './Techs.css'

function Techs () {
    return (
        <section className='techs__section'>
            <h2 className='techs__header'>Технологии</h2>
            <hr className='techs__line'/>
            <h4 className='techs__title'>7 технологий</h4>
            <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__tags'>
                <li className='techs__tags-item'><p className='techs__tag'>HTML</p></li>
                <li className='techs__tags-item'><p className='techs__tag'>CSS</p></li>
                <li className='techs__tags-item'><p className='techs__tag'>JS</p></li>
                <li className='techs__tags-item'><p className='techs__tag'>React</p></li>
                <li className='techs__tags-item'><p className='techs__tag'>Git</p></li>
                <li className='techs__tags-item'><p className='techs__tag'>Express.js</p></li>
                <li className='techs__tags-item'><p className='techs__tag'>mongoDB</p></li>
            </ul>
        </section>
    )
}

export default Techs;
