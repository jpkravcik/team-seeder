import { useHistory } from "react-router";

const Input = () => {
    const history = useHistory();
    return (

        <div className="inputTournament">
            <h1>Tournament</h1> 
                <p>
                    The input page will be easy to implement on the front end. 
                    A few design issues I’m having is how to display three different inputs. 
                    When a team name is entered, the input page/box will then disappear and 
                    pull up the team player input, once that player is added it will display
                    the (first/top) player and the input will be pushed down below the name.  
                    I will need a handful of “if statements” to make that happen as well as 
                    buttons to allow the admin to edit tournament name, team name, and players.
                </p>

                <div className = 'tName'></div>
                <input type='text' placeholder ='Tournament Name' />

                <br/>
            
                <div className ="inputTeam"> </div>
                <button>Add Team</button>
                <input type='text' placeholder = 'Team Name'></input>
        
                <br/>
          
                <div className ="player1"></div>
                <button>Add </button>
                <input type='text' placeholder = 'Player name/ID #'></input>

                <br/>

                <div className ="generate"></div>
                <button type="submit" onClick={() => history.push('/output')}> Save & Run  </button>
        
        </div>          
       
    )
}

export default Input;