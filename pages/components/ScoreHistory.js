import {useState, useEffect} from 'react';
import moment from "moment";


const ScoreHistory = (props) => {
   const [gameHistory, setGameHistory] =useState([]);
    const fetchScores = () =>{
        fetch('http://127.0.0.1:8000/api/game/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGameHistory(data);

            });
    }
    useEffect(() => {
        fetchScores();
    }, []);

    return(
      <div>
{/*          date: "2021-11-17T14:55:11Z"*/}
{/*id: "438d35a3-738a-4c71-ab11-e42eb14213d9"*/}
{/*result: "Chelsea - Man Manyu - draw"*/}
{/*team_1: "e9c6a539-77fb-4098-b981-ca9250159e11"*/}
{/*team_1_score: 0*/}
{/*team_2: "d368dd4b-6c4f-4f28-9253-648158170045"*/}
{/*team_2_score: 0*/}
{/*winner: null*/}
          <h1>Scores</h1>
            {/*    list all the scores from games */}
          {gameHistory.map(game =>(
             <>
                <strong>{game.team_1.name} vs {game.team_2.name}</strong><br />
                 {game.team_1.name} {game.team_1_score} :{game.team_2.name} {game.team_2_score}<br />
                 {moment(game.date).format("MMM Do YY") }<br />
                 {game.result}
                 <hr />
             </>

          ))}
      </div>
    );
    }

;

export default ScoreHistory;

