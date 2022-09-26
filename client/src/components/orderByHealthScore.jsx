import { useDispatch, useSelector } from "react-redux";
import { changeInput, changePage, orderHealthScore, setSelectScore } from "../store/actions";

let ASCENDING = 'ascending';
let DESCENDING = 'descending';

export default function OrderByHealthScore() {
    let prueba = useSelector((state) => state.prueba);
    let recipes = useSelector((state) => state.filteredRecipes);    
    let dispatch = useDispatch();


    function onselectChange(theEvent) {
        dispatch(orderHealthScore(recipes, theEvent.target.value));
        dispatch(changePage(1));
        dispatch(changeInput(1));
        dispatch(setSelectScore('sel'));
    };
    
    return (
        <div>
            <span>Health score</span>            
            <select name='selectScore' onChange={onselectChange}>
                <option ></option>
                <option value={ASCENDING}>Ascending</option>
                <option value={DESCENDING}>Descending</option>
            </select>
        </div>
    );
};