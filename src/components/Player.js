import { useHistory } from "react-router"

const Player = () => {
    const history = useHistory();
    return (
        <div className = "playerWrapper">
            <h1>Player Page</h1>
            <br />
            <form className = "playerForm">
               <div className="playerDescription">
                    
                    <h2>Player Name</h2>
                    <div className="playerIDprintCSS">Player ID:43210</div>
                    
                    <div className = "playerStats">
                        
                        Wins: 10 
                        <div className="playerTournaments">Tournaments<br/>01234<br/>01234<br/>01234</div>
                        <button type="button" className="playerclaimButton">Claim</button>
                     
                        <button type="button" className="playerChangeNameButton">Change Name</button>
         
                        <button type="button" className="playerChangePssButton">Change Password</button>
                        
                        <br/> 
                        Losses: 100<br/>
                        Tournament Wins: 1<br/> 
                        


                    </div>
                    
               </div>
            </form>
        </div>
    )
}

export default Player
