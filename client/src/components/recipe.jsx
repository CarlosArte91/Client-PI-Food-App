import { Link } from 'react-router-dom';
import style from './recipe.module.css';

export default function Recipe({ id, name, image, diets, healthScore }) {
    return (
        <div className={style.containerAll}>
            <div className={style.containerHeader}>
                <div className={style.image}>
                    <img src={image} alt="recipe"/>
                </div>
                <div className={style.containerTitle}>
                    <div className={style.nameTitle}><span>{name}</span></div>            
                    <div className={style.points}><span>{healthScore} points</span></div>
                </div>
            </div>
            <div className={style.containerDiets}>
                {
                    diets.map(diet => {
                        return <span key={diet}>• {diet}</span>
                    })
                }
            </div>
            <div className={style.containerButton}>
                <Link to={`/detail/${id}`}>
                    <span>see more</span>
                </Link>
            </div>
        </div>
    );
};
