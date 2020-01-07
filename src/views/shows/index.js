import React, { useState, useEffect } from 'react';
import axios from "axios";

function Shows () {

    const[data, setData] = useState([]);

    const dataReseived = async () => {
        const result = await axios('http://127.0.0.1:8000/api/shows');
        console.log(result.data);
        setData(result.data);
    }

    useEffect(() => {
        dataReseived();
    }, [])

    return(
        <React.Fragment>
            <div>
                <ul>
                    {data.map((item, i) =>{
                        return(
                            <li key={i}>{item.site}</li>
                        )
                    })}
                </ul> 
            </div>
        </React.Fragment>
    );
}

export default Shows;