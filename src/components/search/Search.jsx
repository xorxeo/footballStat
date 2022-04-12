import { useState } from "react";
import "./Search.css"


export const Search = (props) => {

    const {
        value,
        onInput,
    } = props;

    const [activeSearchInput, setActiveSearchInput] = useState(false);
    const [activeSearchButton, setActiveSearchButton] = useState(false);

    const fn = function (searchValue) {

        setActiveSearchButton(!activeSearchButton);
        setActiveSearchInput(!activeSearchInput);
        onInput("");
    }

    return (
        <div className="search">
            <button
                className={activeSearchButton ? 'search__button__active' : 'search__button'} onClick={() => fn()}>
            </button>
            <input
                value={value}
                type="text"
                placeholder="type for search..."
                className={activeSearchInput ? 'search__input__active-input' : 'search__input'}
                onChange={(event) => onInput(event.target.value)}
            />
        </div>
    );
}





