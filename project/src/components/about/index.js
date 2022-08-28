import style from './style.module.scss';
import aboutIcon1 from '../../images/aboutIcon1.svg';
import aboutIcon2 from '../../images/aboutIcon2.svg';
import aboutIcon3 from '../../images/aboutIcon3.svg';
import lineAbout from '../../images/lineAbout.svg';
import aboutActiv from '../../images/aboutActiv.svg';
import fonAbout from '../../images/fonAbout.svg';
import line from '../../images/LineCatalog.svg';
import {useState} from 'react';
//import { Link } from "react-router-dom";

export default () => {
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);

    const handleMouseOver1 = () => {
        setIsHovering1(true);
    };
    const handleMouseOut1 = () => {
        setIsHovering1(false);
    };
    const handleMouseOver2 = () => {
        setIsHovering2(true);
    };
    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };
    const handleMouseOver3 = () => {
        setIsHovering3(true);
    };
    const handleMouseOut3 = () => {
        setIsHovering3(false);
    };

    return (
        <div className={style.container}>
            <img className={style.about__fon} src={fonAbout} />

            <div className={style.about}>
                <img src={line} />
                <p className={style.about__caption}>
                    о компании
                </p>
                <p className={style.about__text}>
                    С 1996 года мы занимаемся оптовыми поставками электронных компонентов от ведущих заводов изготовителей из Европы и Азии для Российских производителей.
                </p>
            </div>
            
            <div className={style.about__block}>

                <img className={style.about__block_lineAbout} src={lineAbout} />


                <div className={style.about__blockActiv}>

                    <div className={style.about__block_item} onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}>
                        <img className={style.about__block_margin} src={aboutIcon1} />
                        <p >Изделия в наличии, на складе СПБ и Мск</p>
                    </div>

                    {isHovering1 && (
                    <div className={style.about__blockActiv_picture}>
                        <img className={style.about__aboutActiv_picture} src={aboutActiv} />
                    </div>
                    )}
                </div>
                <div className={style.about__blockActiv}>

                    <div className={style.about__block_item} onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                        <img className={style.about__block_margin} src={aboutIcon2} />
                        <p >Комплексные поставки, предлагаем аналоги</p>
                    </div>

                    {isHovering2 && (
                    <div className={style.about__blockActiv_picture}>
                        <img className={style.about__aboutActiv_picture} src={aboutActiv} />
                    </div>
                    )}
                </div>
                <div className={style.about__blockActiv}>

                    <div className={style.about__block_item} onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
                        <img className={style.about__block_margin} src={aboutIcon3} />
                        <p >Официальные дистрибьюторы 12 заводов-изготовителей</p>
                    </div>

                    {isHovering3 && (
                    <div className={style.about__blockActiv_picture}>
                        <img className={style.about__aboutActiv_picture} src={aboutActiv} />
                    </div>
                    )}
                </div>
                

                
            </div>
        </div>
        
    )
}