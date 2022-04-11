import { useState } from "react";
import "./Search.css"



export const Search = (props) => {

    const { value,
            onInput,
            activeSearchInput, setActiveSearchInput,
            searchValue, setSearchValue,
            activeSearchButton, setActiveSearchButton } = props;

    const fn = function (searchValue) {
        // if (searchValue) {
        //     onInput(setSearchValue(''));
        //     console.log(searchValue);
        // }
        setActiveSearchButton(!activeSearchButton);
        setActiveSearchInput(!activeSearchInput);
        setSearchValue('')
        
        
    }

    return (



        <div className="search">
            {/* <button className="search__button" onClick={() => fn()}> */}
            <button className={activeSearchButton ? 'search__button__active' : 'search__button' } onClick={() => fn()}>

            </button>

            <input
                type="text"
                placeholder="type for search..."
                className={activeSearchInput ? 'search__input__active-input' : 'search__input'}
                onChange={(event) => onInput(event.target.value)}

            />



        </div>


    );
}





