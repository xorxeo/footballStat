import { useState } from "react";



export const Search = (props) => {

    const { value, onInput, place, active, setActive } = props;



    return (
        <div>
            <div className="search-button">
                <button className="search-button__search-button" onClick={() => setActive(!active)}>
                    search
                </button>
            </div>

            <div className="search-form">
                <form className="search-form__input" >
                    <input
                        type="text"
                        placeholder={`${place} search`}
                        className={active ? 'search__input active-input' : 'search__input'}
                        onChange={(event) => onInput(event.target.value)}
                        
                        
                    />
                </form>


            </div>

        </div>

    );
}





