import { useHistory } from "react-router-dom"

const Home = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="loginHome">
                <button type="submit" onClick={() => history.push('/login')} className="defaultButton">sign up</button>
                <button type="submit" onClick={() => history.push('/login')} className="defaultButton">login</button>
            </div>

            <h1>Welcome</h1>

            <div className="descriptionText">
                
                    Team Seeder allows for the creation of tournament brackets
                    that seed matches to minimize the amount of matches between 
                    players on the same team. Click the start button to create 
                    a new tournament or input a tournament id to view an already 
                    created tournament. 
                    
            </div>

            <button type="submit" onClick={() => history.push('/tournament')} className="defaultButton">start</button>
            
            <div className="findTournament">

                <button type="submit" className="findButton">find</button>
                <input type="id" placeholder="tournament id"/>

            </div>
        </div>
    )
}

export default Home
