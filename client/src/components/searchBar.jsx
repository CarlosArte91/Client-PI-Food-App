import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeInput, changePage, searchRecipes } from "../store/actions";
import style from './searchBar.module.css';

export default function SearchBar() {
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    function onButtonSubmit(theEvent) {
        theEvent.preventDefault();       
        dispatch(changePage(1));
        dispatch(changeInput(1));
        dispatch(searchRecipes(search));
        setSearch('');
    }

    function onInputChange(theEvent) {
        setSearch(theEvent.target.value)
    }

    return (
        <form onSubmit={onButtonSubmit} className={style.containerSearch}>
            <div className={style.inputSearch}>
                <input type='text' onChange={onInputChange} value={search}></input>
            </div>
            <div className={style.butonSearch}>
                <input type="submit" value='Search'/>
            </div>
        </form>
    );
};
