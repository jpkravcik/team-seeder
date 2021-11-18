import {Player} from '../index.js'

const Matchup = (props) => {
    return (
        <div className="matchup">
            <Player {...props.players.player1} />
            <Player {...props.players.player2} />
            {props == null ? console.log("matchup, ", props) : console.log("Matchup, ", null)}
        </div>
    )
}

export default Matchup
