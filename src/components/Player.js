import { useHistory } from "react-router"
import React, {useState} from "react";



const Player = () => {
    const history = useHistory();
  
    return (
        <div className = "playerWrapper">
            <h1>Player Page</h1>
                
            <br />
            <div className = "playerForm_Container">
               <div className="playerDescription">
                    
                    <h2>Harry Byrd</h2>
                    
                   
                    
                    <div className = "playerStats_Left">
                        Wins: 10 <br/>
                        Losses: 100<br/>
                        Tournament Wins: 1<br/> 
                    </div>
                     
                    <div className="playerTournamentsNums_Center">
                        <br/>
                        <p>Tournaments Played<br/></p>
                        <a href="Player">01234</a><br/>
                        <a href="Player">01235</a><br/>
                        <a href="Player">01236</a><br/>
                    </div>
                    <div className="playerEditArea_Right">
                        <div className="playerIDNumber">
                            Player ID:43210 &nbsp;
                        
                            <button type="button" onClick={() => history.push('/Player')} className="playerclaim_Button">
                                Claim This ID
                            </button>
                            
                        </div>

                            <div className="playerInputButton_Container">
                                <br/>
                                    <input type="plyaerName_Input" 
                                    placeholder="Change name here"/>
                                    &nbsp;
                                    <button type="button" onClick={() => history.push('/Player')} className="playerChangeName_Button">
                                        Save Players Name
                                    </button>
                                <br/>
                                <br/>
                                    Password: &nbsp;
                                    <input type="plyaerPassword_Input" placeholder="Create Password here"/>
                                    <br/>
                                    Confrim Password: &nbsp;
                                    <input type="plyaerPasswordCheck_Input" placeholder="Check Password here"/>
                                    <br/>
                                    <br/>
                                    <button type="submit" onClick={() => history.push('/Player')} className="playerChangePss_Button" >Save</button>
                                    
            
                            </div>
                        
                    </div>
                   
               </div>
            </div>
           
        </div>
    )
}

export default Player
