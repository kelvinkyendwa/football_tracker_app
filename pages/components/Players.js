import React, {useEffect, useState} from 'react';

const Players = () => {
   const [teams, setTeams] = useState([]);

    const fetchTeams = () =>{
        fetch('http://127.0.0.1:8000/api/team/')
        .then(res => res.json())
        .then(data => {
            console.log('players data',data);
            setTeams(data);
        })
    }

    useEffect(() => {
        fetchTeams();
    }, []);
    return (
        <div>
            <h1>All Active Players</h1>
            {/*    fetch all players from that team */}
            {teams.map(team =>(
                <>
                    <h3>{team.name}</h3>
                   <ol> {team.players.map(player => <li key={player.id}>{player.name}</li>)}</ol>
                    <hr />
                </>
            ))}
        </div>
    );
}

export default Players;