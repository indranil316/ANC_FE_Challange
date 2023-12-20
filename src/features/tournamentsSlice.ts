import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTournamentsData = createAsyncThunk(
    'getTournamentData',
    async () =>{
        const response = await axios.get('https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e');
        return response.data;
    }
)

interface TournamentsState{
    loading:boolean,
    isError:boolean,
    data:Tournament[]
}

const initialState: TournamentsState = {
    loading:false,
    isError:false,
    data:[]
};

const tournamentsSlice = createSlice({
    name:'tournaments',
    initialState,
    reducers:{
        addPlayerToTeam : (state, action) => {
            let i1=-1,i2=-1;
            state.data.forEach((tournament,i)=>{
                if(tournament.game === action.payload.game){
                    i1=i;
                }
            });
            (i1 !== -1) && state.data[i1].teams.forEach((team,i)=>{
                if(team.team_name === action.payload.teamName){
                    i2=i;
                }
            });
            (i1 !== -1 && i2 !== -1) && state.data[i1].teams[i2].players.push(action.payload.player)
        },
        editPlayer : (state, action) => {
            let i1=-1,i2=-1;
            state.data.forEach((tournament,i)=>{
                if(tournament.game === action.payload.game){
                    i1=i;
                }
            });
            (i1 !== -1) && state.data[i1].teams.forEach((team,i)=>{
                if(team.team_name === action.payload.teamName){
                    i2=i;
                }
            });
            let playerToBeUpdated = (i1 !== -1 && i2 !== -1) && state.data[i1].teams[i2].players[action.payload.index];
            if(playerToBeUpdated){
                playerToBeUpdated.name = action.payload.player.playerName;
                playerToBeUpdated.age = action.payload.player.playerAge;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTournamentsData.fulfilled, (state, action)=>{
            state.loading=false;
            state.data = action.payload;
            state.isError=false;
        })
        builder.addCase(getTournamentsData.pending, (state) => {
            state.loading=true;
            state.isError=false;
        })
        builder.addCase(getTournamentsData.rejected, (state) => {
            state.loading=false;
            state.isError=true;
        })
    },
})

export const { addPlayerToTeam, editPlayer } = tournamentsSlice.actions;

export default tournamentsSlice.reducer;