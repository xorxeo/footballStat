import './DateFilter.css'



export const DateFilter = (props) => {
    const {
        searchDateStart,
        searchDateEnd,
        onInputStart,
        onInputEnd,
    } = props;
    return (
        <div className="date">
            <input
                className="date__input__start"
                type="date"
                onChange={(event) => onInputStart(`${event.target.value}T00:00:00Z`)}
            >
            </input>
            <input
                className="date__input__end"
                type="date"
                onChange={(event) => onInputEnd(`${event.target.value}T23:59:59Z`)}
            >
            </input>
            <button className="search__button"
                    onClick={function () {
                    console.log(searchDateStart);
                    console.log(searchDateEnd);
                }

                }
            >
            </button>
        </div>
    )
}
