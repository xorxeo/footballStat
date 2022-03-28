import { useState } from "react";



export const Search = (props) => {

const {value, onInput} = props;

    return (

        <div className="form">
            <form className="search__form" >
                <input
                    type="text"
                    placeholder="Search in the ..."
                    className="search__input"
                    onChange={(event) => onInput(event.target.value)}
                />
            </form>

        </div>
    );
}





