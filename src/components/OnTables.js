import React from 'react'

export default function OnTables({qtyTable}) {
    return (
        <div className="mt-4">
            <div><i className="bi bi-square-fill fs-5 text-success"></i> โต๊ะว่าง</div>
            <div><i className="bi bi-square-fill fs-5 text-danger"></i> โต๊ะไม่ว่าง</div>
            <h2 className="mt-3">โต๊ะว่าง {qtyTable} โต๊ะ</h2>
        </div>
    )
}
