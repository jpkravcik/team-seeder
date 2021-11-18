import {Round, Matchup, Player} from '../index.js';

const Bracket = () => {
    const data = {
        
    }

    const players = {
        player1 : {
            seed : 1,
            name : "John"
        },
        player2 : {
            seed : 2,
            name : "HJ"
        }
    }
    const player2 = {
        seed : 2,
        name : "HJ"
    }

    return (
        <div className="bracket">
            <Round>
                <Matchup players = {players} />
                {console.log(players)}
            </Round>
                {/* <Matchup>
                    <Player seedNum={3} name="player 3" />
                    <Player seedNum={4} name="player 4" />
                </Matchup>

                <Matchup>
                    <Player seedNum={5} name="player 5" />
                    <Player seedNum={6} name="player 6" />
                </Matchup>

                <Matchup>
                    <Player seedNum={7} name="player 7" />
                    <Player seedNum={8} name="player 8" />
                </Matchup>
            </Round>

            <Round>
                <Matchup>
                    <Player seedNum={1} name="player 1" />
                    <Player seedNum={4} name="player 4" />
                </Matchup>

                <Matchup>
                    <Player seedNum={5} name="player 5" />
                    <Player seedNum={8} name="player 8" />
                </Matchup>
            </Round>

            <Round>
                <Matchup>
                    <Player seedNum={1} name="player 1" />
                    <Player seedNum={8} name="player 8" />
                </Matchup>
            </Round> */}
        </div>
    )
}

export default Bracket