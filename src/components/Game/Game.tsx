import Card from 'react-bootstrap/Card';
import Player from './Player';
import AddPlayer from './AddPlayer';

const Game: React.FC<Tournament> = ({game, teams}) => {
  return (
    <Card className='my-5'>
      <Card.Header>
        <h2>{game}</h2>
      </Card.Header>
      <Card.Body className='d-flex flex-column gap-5'>
        {
          teams.map((team: Team)=>{
            return (
              <div key={team.team_name}>
                <Card.Title>{team.team_name} ({team.players.length})</Card.Title>
                <AddPlayer game={game} teamName={team.team_name}/>
                {
                  team.players.map((player: Player, index: number)=>{
                    return <Player player={player} key={player.name+player.age} index={index} game={game} teamName={team.team_name}/>
                  })
                }
              </div>
            )
          })
        }
      </Card.Body>
    </Card>
  )
}

export default Game;