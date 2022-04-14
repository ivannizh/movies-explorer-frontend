import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";

function Main() {
    return (
        <>
            <Promo/> {/*— компонент с вёрсткой баннера страницы «О проекте».*/}
            <AboutProject/> {/*— компонент с описанием дипломного проекта.*/}
            <Techs/> {/*— компонент с использованными технологиями.*/}
            <AboutMe/> {/*— компонент с информацией о студенте.*/}
        </>
    )
}

export default Main;
