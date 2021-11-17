import React, {useEffect, useState} from 'react';

const Table = () => {
    const [data,setData] =useState()

    useEffect(() =>
    {
        fetch('http://127.0.0.1:8000/table/')
        .then(res => res.json())
        .then(json => setData(json))
    },[])
    return(
<div>
    <h1>League Table</h1>
    <table>
        <thead>
            <tr>
                <th>Team</th>
                <th>Pts</th>
            </tr>
        </thead>

        <tbody>
        {data?.map(team => (
            <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.points}</td>
            </tr>
        ))}

        </tbody>
    </table>
</div>
    )
    }

;

export default Table;