const Input = () => {
    return (

        <div className="inputTournament"> 


        <div className = 'tName'></div>
            <input type='text' placeholder ='Tournament Name' />
        


        <div className ="team"></div>
        <button>Add Team</button>
        <input type='text' placeholder = 'Team Name'></input>

        <div className ="player1"></div>
        <button>Add </button>
        <input type='text' placeholder = 'Player name/ID #'></input>

        <div className ="generate"></div>
        <button>Save & Run  </button>
        
        </div>          
       
    )
}

export default Input;