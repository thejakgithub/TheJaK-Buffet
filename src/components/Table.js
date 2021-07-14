import React from 'react'

export default function Tables({ numberTable, updateTables, onPayment }) {


    return (
        <span>

            {numberTable.color === "danger" ?
                <button className="btn btn-danger mx-lg-5 my-lg-4 p-lg-5 mx-md-4 my-md-3 p-md-4 mx-sm-3 my-sm-2 p-sm-3 mx-3 my-2" onClick={() => onPayment(numberTable.number)} ><h2 className="mx-md-4 mx-lg-4 mx-sm-3 mx-3 ">{numberTable.number}</h2></button>
                :
                <button className="btn btn-success mx-lg-5 my-lg-4 p-lg-5 mx-md-4 my-md-3 p-md-4 mx-sm-3 my-sm-2 p-sm-3 mx-3 my-2" onClick={() => updateTables(numberTable.number)}><h2 className="mx-md-4 mx-lg-4 mx-sm-3 mx-3 ">{numberTable.number}</h2></button>
            }
        </span>
    )
}
