import img1 from '../../images/image1.svg';
import img2 from '../../images/image2.svg';
import img3 from '../../images/image3.svg';
import img4 from '../../images/image4.svg';
import img5 from '../../images/image5.svg';
import img6 from '../../images/image6.svg';
import img7 from '../../images/image7.svg';
import img8 from '../../images/image8.svg';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import line from '../../images/LineCatalog.svg';
import lineBotttom from '../../images/lineBottom.svg';
import style from './style.module.scss';

//import { Link } from "react-router-dom";

export default () => {
    return (
        <div className={style.container}>
             <div className={style.carusel}>
            
                <img className={style.carusel__line} src={line} alt="Card image cap" />
                <p className={style.carusel__text}>КАТАЛОГ</p>
                <div class="card-deck" className={style.catalog}>
                    <div class="card" className={style.card}>
                        <img class="card-img-top"  src={img1} alt="Card image cap" />
                        <div class="card-body" className={style.card__body}>
                        <h5 class="card-title">Активные компоненты</h5>
                        </div>
                        <img class="card-img-top" className={style.card__lineBottom} src={lineBotttom} alt="Card image cap" />
                    </div>
                    <div class="card" className={style.card}>
                        <img class="card-img-top" src={img2} alt="Card image cap" />
                        <div class="card-body" className={style.card__body}>
                        <h5 class="card-title">Пассивные компоненты</h5>
                        </div>
                        <img class="card-img-top" className={style.card__lineBottom} src={lineBotttom} alt="Card image cap" />
                    </div>
                    <div class="card" className={style.card}>
                        <img class="card-img-top" src={img3} alt="Card image cap" />
                        <div class="card-body" className={style.card__body}>
                        <h5 class="card-title">Светодиоды и светодиодные  индикаторы</h5>
                        </div>
                        <img class="card-img-top" className={style.card__lineBottom} src={lineBotttom} alt="Card image cap" />
                    </div>
                    <div class="card" className={style.card}>
                        <img class="card-img-top" src={img4} alt="Card image cap" />
                        <div class="card-body" className={style.card__body}>
                        <h5 class="card-title">Установочные изделия</h5>
                        </div>
                        <img class="card-img-top" className={style.card__lineBottom} src={lineBotttom} alt="Card image cap" />
                    </div>
                    <div class="card" className={style.card}>
                        <img class="card-img-top" src={img5} alt="Card image cap" />
                        <div class="card-body" className={style.card__body}>
                        <h5 class="card-title">Резонаторы и генераторы</h5>
                        </div>
                        <img class="card-img-top" className={style.card__lineBottom} src={lineBotttom} alt="Card image cap" />
                    </div>
                    <div class="card" className={style.card}>
                        <img class="card-img-top" src={img6} alt="Card image cap" />
                        <div class="card-body" className={style.card__body}>
                        <h5 class="card-title">Акустические компоненты</h5>
                        </div>
                        <img class="card-img-top" className={style.card__lineBottom} src={lineBotttom} alt="Card image cap" />
                    </div>
                    <div class="card" className={style.card}>
                        <img class="card-img-top" src={img7} alt="Card image cap" />
                        <div class="card-body" className={style.card__body}>
                        <h5 class="card-title">Реле</h5>
                        </div>
                        <img class="card-img-top" className={style.card__lineBottom} src={lineBotttom} alt="Card image cap" />
                    </div>
                    <div class="card" className={style.card}>
                        <img class="card-img-top" src={img8} alt="Card image cap" />
                        <div class="card-body" className={style.card__body}>
                        <h5 class="card-title">Кабели и аксесуары</h5>
                        </div>
                        <img class="card-img-top" className={style.card__lineBottom} src={lineBotttom} alt="Card image cap" />
                    </div>
                </div>
                
            </div>
        </div>
       
        
    )
}