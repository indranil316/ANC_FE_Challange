import { useState } from "react";
import styles from './Game.module.scss';
import { useDispatch } from "react-redux";
import { addPlayerToTeam } from '../../features/tournamentsSlice';

interface AddPlayerProps {
    game: string;
    teamName: string;
}

const AddPlayer: React.FC<AddPlayerProps> = ({game, teamName}) => {
    const [playerName, setPlayerName] = useState("");
    const [playerAge, setPlayerAge] = useState("");
    const dispatch = useDispatch();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    }
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerAge(e.target.value);
    }
    const add = () => {
        dispatch(addPlayerToTeam({
            game,
            teamName,
            player:{
                name: playerName,
                age: playerAge
            }
        }));
        setPlayerName("");
        setPlayerAge("");
    }
    return (
        <div className='d-flex form-group my-2 gap-2'>
            <input
                className='form-control'
                type='text'
                value={playerName}
                onChange={handleNameChange}
                placeholder="Enter Player Name"
            />
            <input
                className='form-control'
                type='number'
                value={playerAge}
                onChange={handleAgeChange}
                placeholder="Enter Player Age"
            />
            <button
                className={`${styles.btn}`}
                onClick={add}
            >
            Add
            </button>
        </div>
    )
}

export default AddPlayer