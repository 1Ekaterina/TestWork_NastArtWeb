import style from './style.module.scss';
import lineBottomKarta from '../../images/lineBottomKarta.svg';
import backgroundCallback from '../../images/backgroundCallback.svg';

// import LOGO from '../../images/LOGO.svg';
//import { Link } from "react-router-dom";

export default () => {
    return (
        <div className={style.container}>
            <img className={style.callback__backgroundCallback} src={backgroundCallback} />
            <div className={style.callback}>
                <p className={style.callback__caption}> Закажите обратный звонок</p>
                <img src={lineBottomKarta} />
                <p className={style.callback__text}>Более 150 крупнейших компаний уже доверили нам комплектацию. Давайте работать вместе! </p>
                <div className={style.callback__form}>
                     <input
                        className={style.callback__form_input}
                        type="text"
                        placeholder="Search"
                        value="Имя"
                    />
                     <input
                        className={style.callback__form_input}
                        type="text"
                        placeholder="Search"
                        value="Телефон"
                    />
                    <a  className={style.callback__form_button} href="#">Отправить</a>
                </div>
                <p className={style.callback__agree}>Нажимая на кнопку, вы даете согласие на обработку <a className={style.callback__agree_link}>персональных данных</a>  и соглашаетесь с условиями <a className={style.callback__agree_link}>пользовательского соглашения</a> </p>
            </div>
        </div>
        
    )
}