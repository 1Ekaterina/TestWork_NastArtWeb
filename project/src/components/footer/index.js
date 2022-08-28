import footerIcon from '../../images/footerIcon.svg';
import lineFooter from '../../images/lineFooter.svg';
import LOGO from '../../images/LOGO.svg';
import style from './style.module.scss';
import {useState} from 'react';

//import { Link } from "react-router-dom";

export default (props) => {


    const katalogList = [ 'Активные компоненты',
'Элементы питания и аксессуары',
'Пассивные компоненты',
'Дисплеи жидкокристаллические',
'Светодиоды и светодиодные индикаторы',
'Электродвигатели',
'Установочные изделия',
'Антенны',
'Резонаторы и генераторы компоненты',
'Готовые изделия',
'Акустические компоненты',
'Разрядники',
'Реле',
'Датчики',
'Вентиляторы и аксессуары',
'Кабели, провода, аксессуары',
'Оборудование и материалы для пайки',
'Элементы питания и аксессуары',
'Дисплеи жидкокристаллические',
'Электродвигатели',
'Антенны',
'Готовые изделия',
'Разрядники',
'Датчики'];

    const [isHovering1, setIsHovering1] = useState(false);
    const handleMouseOver1 = () => {
        setIsHovering1(true);
    };
    const handleMouseOut1 = () => {
        setIsHovering1(false);
    };
    const [isHovering2, setIsHovering2] = useState(false);
    const handleMouseOver2 = () => {
        setIsHovering2(true);
    };
    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };
    const [isHovering3, setIsHovering3] = useState(false);
    const handleMouseOver3 = () => {
        setIsHovering3(true);
    };
    const handleMouseOut3 = () => {
        setIsHovering3(false);
    };
    const [isHovering4, setIsHovering4] = useState(false);
    const handleMouseOver4 = () => {
        setIsHovering4(true);
    };
    const handleMouseOut4 = () => {
        setIsHovering4(false);
    };
    const [isHovering5, setIsHovering5] = useState(false);
    const handleMouseOver5 = () => {
        setIsHovering5(true);
    };
    const handleMouseOut5 = () => {
        setIsHovering5(false);
    };
    return (
        <div className={style.container}>
             <div className={style.footer}>


                <div className={style.footer__contact}>

                    <div className={style.footer__contact_logo}>
                        <img src={LOGO} alt="Logotip"/>
                    </div>
                    
                    <div className={style.footer__contacts}>
                        <img className={style.footer__contacts_addresIcon} src={footerIcon} />
                         <div className={style.footer__contacts_addresFlex}>
                            <p className={style.footer__contacts_addres}>Санкт-Петербург, ул. Тестовая д. 0 офис 0</p>
                            <p className={style.footer__contacts_telephone}>+ 7 (000) 000 00 00</p>
                            <p className={style.footer__contacts_email}> test@test.ru</p>
                         </div>   
                        
                    </div>
                    <div className={style.footer__contacts}>
                        <img className={style.footer__contacts_addresIcon} src={footerIcon} />
                         <div className={style.footer__contacts_addresFlex}>
                            <p className={style.footer__contacts_addres}>Москва, ул. Тестовая д. 0 стр. 0</p>
                            <p className={style.footer__contacts_telephone}>+ 7 (000) 000 00 00</p>
                            <p className={style.footer__contacts_email}> test@test.ru</p>
                         </div>   
                        
                    </div>

                </div>


                <div className={style.footer__menu}>
                    <p className={style.footer__menu_caption}>
                        Меню
                    </p>
                     <ul className={style.footer__list}>
                        <li className={style.footer__list_item} onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}>
                            {isHovering1 && (
                    <img className={style.footer__menu_line} src={lineFooter} />)}
                            Главная
                        </li>
                        <li className={style.footer__list_item} onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                            {isHovering2 && (
                    <img className={style.footer__menu_line} src={lineFooter} />)}
                            О компании
                        </li>
                        <li className={style.footer__list_item}onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
                            {isHovering3 && (
                    <img className={style.footer__menu_line} src={lineFooter} />)}
                            Каталог производителя
                        </li>
                        <li className={style.footer__list_item} onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}>
                            {isHovering4 && (
                    <img className={style.footer__menu_line} src={lineFooter} />)}
                            Сертификаты
                        </li>
                        <li className={style.footer__list_item} onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5}>
                            {isHovering5 && (
                    <img className={style.footer__menu_line} src={lineFooter} />)}
                            Контакты
                        </li>
                    </ul>
                    <ul className={style.footer__list_bottom}>
                        <li className={style.footer__list_itemBottom}>
                            Карта сайта
                        </li>
                        <li className={style.footer__list_itemBottom}>
                            Политика конфиденциальности
                        </li>
                    </ul>
                    
                </div>


                <div className={style.footer__katalog}>
                    <p className={style.footer__menu_caption}>
                        Каталог
                    </p>

                    <ul className={style.katalog__list}>
                        {katalogList.map((reason, index) =>
                             <li className={ [style.katalog__item, style.katalog__text].join(' ') } key={index}> {reason}</li>
                        )}
                    </ul>
                </div>
             </div>
        </div>
       
        
    )
}