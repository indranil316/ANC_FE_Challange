interface Player{
    name: string;
    age: number;
}
interface Team{
    team_name: string;
    players: Player[];
}

interface Tournament{
    game: string;
    teams: Team[];
}