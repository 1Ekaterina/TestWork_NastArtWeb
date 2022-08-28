import style from './style.module.scss';
import karta from '../../images/karta.svg';
import kartaIcon from '../../images/kartaIcon.svg';
import lineBottomKarta from '../../images/lineBottomKarta.svg';
//import { Link } from "react-router-dom";

export default () => {
    return (
        <div className={style.karta}>
            <div className={style.container}>
                <div className={style.karta__position}>
                    <img className={style.karta__image} src={karta} alt="Karta"/>
                </div>
                <div className={style.karta__text}>
                    <div className={style.karta__text_item1}>
                        <img src={kartaIcon} alt="Card image cap"/>
                        <p className={style.karta__text_margin}>Северо-Западный федеральный округ</p>
                    </div>
                    <div className={style.karta__text_item2}>
                        <img src={kartaIcon} alt="Card image cap"/>
                        <p className={style.karta__text_margin}>Центральный федеральный округ</p>
                    </div>
                    <div className={style.karta__text_item3}>
                        <img src={kartaIcon} alt="Card image cap"/>
                        <p className={style.karta__text_margin}>Южный федеральный округ</p>
                    </div>
                    <div className={style.karta__text_item4}>
                        <img src={kartaIcon} alt="Card image cap"/>
                        <p className={style.karta__text_margin}>Приволжский федеральный округ</p>
                    </div>
                    <div className={style.karta__text_item5}>
                        <img src={kartaIcon} alt="Card image cap"/>
                        <p className={style.karta__text_margin}>Уральский федеральный округ</p>
                    </div>
                    <div className={style.karta__text_item6}>
                        <img src={kartaIcon} alt="Card image cap"/>
                        <p className={style.karta__text_margin}>Сибирский федеральный округ</p>
                    </div>
                    <div className={style.karta__text_item7}>
                        <img src={kartaIcon} alt="Card image cap"/>
                        <p className={style.karta__text_margin}>Дальневосточный федеральный округ</p>
                    </div>
                </div>
                <div className={style.karta__mainText}>
                    <p className={style.karta__mainText_caption}> География поставок</p>
                    <img src={lineBottomKarta} />
                    <p className={style.karta__mainText_text}>Мы работаем только с надежными транспортными компаниями и организуем доставку в любой регион России или за рубеж </p>
                </div>
            </div>
            
        </div>
        
    )
}