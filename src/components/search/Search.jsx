import { useState } from "react";
import "./Search.css"



export const Search = (props) => {

    const { value, onInput, activeSearchInput, setActiveSearchInput, searchValue, setSearchValue} = props;

    const fn = function(searchValue) {
        // if (searchValue) {
        // }
        setActiveSearchInput(!activeSearchInput);
        setSearchValue('');
        console.log(typeof searchValue);
    }

    return (
      
           

            <div className="search">
                <button className="search__button" onClick={() => fn()}>
                    
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





