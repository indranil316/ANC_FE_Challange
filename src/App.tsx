import { useSelector, useDispatch } from 'react-redux';
import { getTournamentsData } from './features/tournamentsSlice';
import { useEffect } from 'react';
import { RootState } from './store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Game, Loading, ErrorPage } from './components';
import { Container } from 'react-bootstrap';

const App = () => {
  const res = useSelector((state: RootState)=>state.tournament);
  const { loading, isError, data } = res; 
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(function(){
    dispatch(getTournamentsData());
  },[])

  if(isError){
    return <ErrorPage variation='danger' heading='API Error' text='Oops! Something went wrong while fetching data from the API.'/>
  }
  if(loading){
    return <Loading/>
  }
  if(data.length===0){
    return <ErrorPage variation='info' heading='No Data Found' text='Sorry, there is no data available at the moment.'/>
  }
  return (
    <div className='app'>
      <Container>
      {
        data.map(tournament => {
          return <Game key={tournament.game} game={tournament.game} teams={tournament.teams}/>
        })
      }
      </Container>
    </div>
  )
}

export default App