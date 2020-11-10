import React, { useState, useEffect } from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export const DateTime = () => {

    var [date, setDate] = useState("");

    useEffect(() => {
        let curDate = new Date();
        let res = monthNames[curDate.getMonth()] + " " + curDate.getDate();
        setDate(res);
    }, [date]);

    return (
        <p style={{ color: "white", fontWeight: "bold", padding: "0.3em 0" }}>Today: {date}</p>
    )
}

export default DateTime;