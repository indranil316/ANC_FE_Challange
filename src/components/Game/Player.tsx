import React, { useState } from 'react';
import styles from './Game.module.scss';
import { editPlayer } from '../../features/tournamentsSlice';
import { useDispatch } from 'react-redux';

interface PlayerProps {
  player: Player;
  index: number;
  game: string;
  teamName: string;
}

const Player: React.FC<PlayerProps> = ({ player, index, game, teamName }) => {
  const dispatch = useDispatch();
  const { name, age } = player;

  const [playerName, setPlayerName] = useState(name);
  const [playerAge, setPlayerAge] = useState(age);
  const [isEdited, setIsEdited] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
    setIsEdited(true);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerAge(Number(e.target.value));
    setIsEdited(true);
  };

  const handleSave = () => {
    dispatch(editPlayer({
        index: index,
        game: game,
        teamName: teamName,
        player: { playerName, playerAge }
    }))
    setIsEdited(false);
  };

  return (
    <div className='d-flex form-group my-2 gap-2'>
      <input
        className='form-control'
        type='text'
        value={playerName}
        onChange={handleNameChange}
      />
      <input
        className='form-control'
        type='number'
        value={playerAge}
        onChange={handleAgeChange}
      />
      <button
        className={`${styles.btn}`}
        onClick={handleSave}
        disabled={!isEdited}
      >
        Save
      </button>
    </div>
  );
};

export default Player;
