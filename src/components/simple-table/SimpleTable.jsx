import './SimpleTable.css'

export const SimpleTable = (props) => {
    const {
        heads,
        data,
        classes,
    } = props;

    if(!heads?.length || !data?.length) {
        return null;
    } 

    return (

        <table className={`table__${classes}`}>

            <thead>
                <tr className="leagues-calendar-table__head">
                   {heads.map((head) => (<td key={head} className="">{head}</td>))}
                </tr>
            </thead>

            <tbody>

                {data.map((dataItems, idx) => (
                    <tr key={`${dataItems[0]}${idx}`} className="">
                        {dataItems.map((item) => (<td key={`${item}${idx}`} className="">{item}</td>))}
                    </tr>


                ))}


            </tbody>


        </table>
    )
};
