import { useDispatch, useSelector } from "react-redux";
import { changeInput, changePage, orderRecipes, setSelectScore } from "../store/actions";

let ASCENDING = 'ascending';
let DESCENDING = 'descending'

export default function Order() {
    const recipes = useSelector((state) => state.filteredRecipes);
    const dispatch = useDispatch();

    function onSelectChange(theEvent) {
        dispatch(orderRecipes(recipes, theEvent.target.value));
        dispatch(changePage(1));
        dispatch(changeInput(1));
        dispatch(setSelectScore('selected'));
    };

    return (
        <div>
            <span>Alphabetical</span>            
            <select name="selectAlpha" onChange={onSelectChange}>
                <option></option>
                <option value={ASCENDING}>Ascending</option>
                <option value={DESCENDING}>Descending</option>
            </select>
        </div>
    );
};