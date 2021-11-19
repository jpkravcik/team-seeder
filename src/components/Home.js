import React,{ useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from './apiConstants';
import axios from 'axios'
import { useHistory } from 'react-router';
import swords from '../images/fight.svg';
import magnify from '../images/magnify.jpg';

const Home = () => {
    const history = useHistory();
    const [isShownCreate, setIsShownCreate] = useState(false);
    const [isShownFind, setIsShownFind] = useState(false);

    return (
        <div className="default-container">
            <div className="loginHome">
                <button type="submit" onClick={() => history.push('/register')} className="default-button">sign up</button>
                <button type="submit" onClick={() => history.push('/login')} className="default-button">login</button>
            </div>

            <h1 className="text-center text-white text-2xl">Welcome</h1>

            <div className="flex flex-col content-center items-center w-4/12 text-white m-5 p-3">
                <p className="text-justify text-lg">
                    Team Seeder allows for the creation of tournament brackets
                    that seed matches to minimize the amount of matches between 
                    players on the same team. Click the start button to create 
                    a new tournament or input a tournament id to view an already 
                    created tournament. 
                </p> 
            </div>

            <button type="submit" onClick={() => history.push('/tournament')} className="default-button"
            onMouseEnter={() => setIsShownCreate(true)}
            onMouseLeave={() => setIsShownCreate(false)}>
                {isShownCreate ? <img src={swords} alt="swords" className="h-7 text-center content-center ml-auto mr-auto"/> : 'create'}
            </button>
            
            <div className="findTournament">

                <button type="submit" className="default-button"
                onMouseEnter={() => setIsShownFind(true)}
                onMouseLeave={() => setIsShownFind(false)}>
                    {isShownFind ? <img src={magnify} alt="swords" className="h-7 text-center content-center ml-auto mr-auto"/> : 'find'}
                </button>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded text-gray-700 focus:outline-none 
                            focus:border-blue-600 focus:bg-white" type="id" placeholder="tournament id"/>

            </div>
        </div>
    )
}

export default Home
