import style from './style.module.scss';
import LOGO from '../../images/LOGO.svg';
//import { Link } from "react-router-dom";

export default () => {
    return (
        <header>
            <div className={style.header}>
                <div className={style.header__logo}>
                    <img src={LOGO} alt="Logotip"/>
                </div>
                <div className={style.header__nav}>
                    <ul className={style.header__nav__list}>
                        <li className={style.header__nav__list_item}>
                            О компании
                        </li>
                        <li className={style.header__nav__list_item}>
                            Каталог
                        </li>
                        <li className={style.header__nav__list_item}>
                            Каталог производителя
                        </li>
                        <li className={style.header__nav__list_item}>
                            Сертификаты
                        </li>
                        <li className={style.header__nav__list_item}>
                            Производители
                        </li>
                        <li className={style.header__nav__list_item}>
                            Контакты
                        </li>
                    </ul>
                </div>  
                <div className={style.header__contact}>
                    <p className={style.header__contact_telephone}>+ 7 (000) 000 00 00</p>
                    <p className={style.header__contact_email}> test@test.ru</p>
                </div>
            </div>
            <div className={style.banner}>
                <p className={style.banner__caption}>производитель электронных компонентов</p>
                <p className={style.banner__text}>25 заводов поставщиков</p>
                <div className={style.banner__formSearch}>
                    {/* <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Поиск по каталогу" aria-label="Поиск по каталогу" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Поиск</button>
                        </div>
                    </div> */}
                    <input
                        className={style.banner__formSearch_input}
                        type="text"
                        placeholder="Search"
                        value="Поиск по каталогу"
                    />
                    <a  className={style.banner__formSearch_button} href="#">Поиск</a>
                </div>
                <div className={style.banner__bottom}>

                </div>
            </div>
        </header>
        
    )
}