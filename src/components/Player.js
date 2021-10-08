import { useHistory } from "react-router"

const Player = () => {
    const history = useHistory();
    return (
        <div className = "playerWrapper">
            <h1>Player Page</h1>
                
            <br />
            <form className = "playerForm">
               <div className="playerDescription">
                    
                    <h2>Harry Byrd</h2>
                    
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
            <div className = "playerComment">
                    <p>
                                <br/>
                                <br/>
                                I noticed Player page will have lots of work for CSS form to visuallize each button
                                allign neat looking for better user interface. I made basic frame of which part can be 
                                placed for each putton and contexts. It was quite challenging part to style CSS file 
                                because it was difficult to see lively what I was changing on the page. I had to run build
                                and move build files on virtual space. And, I could finally see changes on website.
                                However, I can learn more about CSS by challenging through this project to make good looking
                                and easier interfaces for users.
                                <br/>
                                <br/>
                                I also need to learn how to create input boxes which interact with backend. Currently, I'm having difficulty
                                with allign input box next to button. 
                                I also need to learn how to create input boxes will show up when button is clicked by users.
                                <br/>
                                <br/>
                                Overall, most of itmes on Player page need to be created with higly focusing on user interfaces
                                since this page is for presenting all the data of each players on tournament.
                                And, making sure that each input boxes/buttons/contexts are pulling correctly by backend data. 


                    </p>
                </div>
        </div>
    )
}

export default Player
