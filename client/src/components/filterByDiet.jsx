import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, changePage, filterDiet, getDiets } from '../store/actions';

export default function FilterByDiet() {
    const recipes = useSelector((state) => state.filteredRecipes);
    const diets = useSelector((state) => state.diets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDiets());
    }, []);

    function onChangeSelect(theEvent) {
        dispatch(filterDiet(recipes, theEvent.target.value));
        dispatch(changePage(1));
        dispatch(changeInput(1));
    };

    return (
        <div>            
            <select name="selectDiet" onChange={onChangeSelect}>
                <option></option>
                {
                    diets.map(diet => {
                        return (
                            <option key={diet.id} value={diet.name}>{diet.name}</option>
                        )
                    })
                }
            </select>
        </div>
    );
};
