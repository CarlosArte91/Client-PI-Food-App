import Order from "./order";
import Recipes from "./recipes";
import SearchBar from "./searchBar";
import FilterByDiet from "./filterByDiet";
import OrderByHealthScore from "./orderByHealthScore";
import { Link } from "react-router-dom";
import style from './home.module.css';
import image from '../util/images/kitchen.png';

export default function Home() {    
    return (
        <div>
            <div className={style.header}>
                <div className={style.headerImage}><img src={image} alt="logo" /></div>             
                <div className={style.filterDiet}>
                    <span>FILTER BY DIET</span>
                    <div><FilterByDiet/></div>
                </div>
                <div className={style.order}>
                    <span className={style.orderTitle}>ORDER</span>                    
                    <div className={style.orderAlpha}><Order/></div>                    
                    <div className={style.orderHealth}><OrderByHealthScore/></div>
                </div>
                <div className={style.search}><SearchBar/></div>
                <div className={style.newRecipe}>
                    <Link to={'/createNewRecipe'}>
                        <button>Create new recipe</button>
                    </Link>
                </div>
            </div>
            <Recipes/>
        </div>
    );
};
