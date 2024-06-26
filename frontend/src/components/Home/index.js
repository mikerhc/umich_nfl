import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "./Logo";

import blake from '../../assets/teams/rams/blake.png';
import brandon from '../../assets/teams/eagles/brandon.png';
import mikey from '../../assets/teams/commies/frozone.png';
import hutch from '../../assets/teams/lions/hutch.png';
import jabrill from '../../assets/teams/patriots/jabrill.png';
import jj from '../../assets/teams/vikings/jj.png';
import kris from '../../assets/teams/bengals/kris.png';
import moody from '../../assets/teams/niners/moody.png';
import nico from '../../assets/teams/texans/nico.png';
import rashan from '../../assets/teams/packers/rashan.png';
import junior from '../../assets/teams/chargers/junior.png';
import dpj from '../../assets/teams/lions/dpj.png';

const players = [
    {id: 1, name: "Blake Corum", team: "Los Angeles Rams", position: "RB", imageUrl: blake, teamUrl: "rams"},
    {id: 2, name: "Brandon Graham", team: "Philadelphia Eagles", position: "DE", imageUrl: brandon, teamUrl: "eagles"},
    {id: 3, name: "Mikey Sainristil", team: "Washington Commanders", position: "CB", imageUrl: mikey, teamUrl: "commies"},
    {id: 4, name: "Aidan Hutchinson", team: "Detroit Lions", position: "DE", imageUrl: hutch, teamUrl: "lions"},
    {id: 5, name: "Jabrill Peppers", team: "New England Patriots", position: "S", imageUrl: jabrill, teamUrl: "patriots"},
    {id: 6, name: "JJ McCarthy", team: "Minnesota Vikings", position: "QB", imageUrl: jj, teamUrl: "vikings"},
    {id: 7, name: "Kris Jenkins", team: "Cincinnati Bengals", position: "DT", imageUrl: kris, teamUrl: "bengals"},
    {id: 8, name: "Jake Moody", team: "San Francisco 49ers", position: "K", imageUrl: moody, teamUrl: "niners"},
    {id: 9, name: "Nico Collins", team: "Houston Texans", position: "WR", imageUrl: nico, teamUrl: "texans"},
    {id: 10, name: "Rashan Gary", team: "Green Bay Packers", position: "DE", imageUrl: rashan, teamUrl: "packers"},
    {id: 11, name: "Junior Colson", team: "Los Angeles Chargers", position: "LB", imageUrl: junior, teamUrl: "chargers"},
    {id: 12, name: "Donovan Peoples-Jones", team: "Detroit Lions", position: "WR", imageUrl: dpj, teamUrl: "lions"}
];
const Home = ({ teamData }) => {
    return(
        <>
            <div className = "home-page">
                <div className = "text-zone">
                    <h1>Pro Blue</h1>
                    <h2>Explore your favorite Michigan Alumni in the NFL</h2> 
                    <h2>See upcoming games, stats, and add their games to your calendar!</h2>
                    <Link to="/search" className="flat-button">EXPLORE</Link>
                </div>
                <Logo className="Home"/>
                <div className="player-card-container">
                    {players.map((player) => (
                        <Link to={`/team/${player.teamUrl}`}key={player.id} className="player-card">
                            <img src={player.imageUrl} alt={player.name}/>
                            <div className='player-name'>{player.name}</div>
                            <div className='player-team'>{player.team}</div>
                            <div className='player-pos'>{player.position}</div>
                        </Link>
                    ))}
                    {players.map((player) => (
                        <Link to={`/team/${player.teamUrl}`} key={player.id} className="player-card">
                            <img src={player.imageUrl} alt={player.name}/>
                            <div className='player-name'>{player.name}</div>
                            <div className='player-team'>{player.team}</div>
                            <div className='player-pos'>{player.position}</div>
                        </Link>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Home