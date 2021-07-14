import React from 'react'
import Table from './Table';

export default function AllTables({numberTables,updateTables,onPayment}) {
    return (
        <span>
            {numberTables.map((numberTable) =>
                <Table key={numberTable.number} numberTable={numberTable} updateTables={updateTables} onPayment={onPayment} />
            )}
        </span>
    )
}
