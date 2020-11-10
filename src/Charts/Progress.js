import React from 'react'

export default function Progress({ color, width }) {

    // let barStyle = `
    //     width:"100%",
    //     background:"#f9f8fd",
    //     height:"10px",
    //     borderRadius:"3px"
    // `;

    return (
        <div style={{ height: "6px", width: "100%" }}>
            <div style={{ background: `${color}`, width: `${width}`, height: "6px" }}>
            </div>
        </div>
    )
}
