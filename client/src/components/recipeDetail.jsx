import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { recipesDetails } from "../store/actions";
import style from './recipeDetail.module.css';

export default function RecipeDetail() {
    const recipeDetail = useSelector((state) => state.recipeDetail)
    const { id }  = useParams();
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(recipesDetails(id))
    }, []);

    let diets;
    if (recipeDetail.diets) {
        diets = recipeDetail.diets.map((diet) => {
            return <p key={diet}>• {diet}</p>
        });
    }

    let steps;
    if (recipeDetail.steps) {
        steps = recipeDetail.steps.map((step) => {
            return (
                <div key={step.number}>                    
                    <p key={step.number} className={style.containerP}><span>{step.number} : </span> {step.description}</p>                    
                </div>
            );
        });
    }

    return (
        <div className={style.general}>
            {               
                recipeDetail ?
                <div className={style.containerDetail}>
                    <div className={style.home}>
                        <Link to={'/home'}>
                            <button>Home</button>
                        </Link>
                    </div>
                    <h1>{recipeDetail.name}</h1>
                    <div className={style.container2}>
                        <div className={style.container3}>
                            <div className={style.container5}><img src={recipeDetail.image} alt='recipe'/></div>
                            <div className={style.container4}><span>Health Score: {recipeDetail.healthScore} points</span></div>
                        </div>
                        <div className={style.containerDiet}>
                            <span>Diet Types</span>
                            <div>{diets}</div>
                        </div>                        
                    </div>           
                    <div className={style.containerSummary}>
                        <span>Summary of the recipe</span>
                        <p>{recipeDetail.summary && recipeDetail.summary.replace(/<\/?[^>]+(>|$)/g, ' ')}</p>
                    </div>
                    <div className={style.containerSteps}>
                        <span>Step to step</span>
                        {steps}
                    </div>
                </div> : <div>Loading...</div>
            }            
        </div>
    );
};