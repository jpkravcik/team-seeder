import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from './apiConstants';
import axios from 'axios'
const Home = () => {
    return (
        <div className="container">
            <div className="loginHome">
            </div>
            <h1>Welcome</h1>
            <div className="siteDescription">
                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer ac convallis nisi. Aenean convallis malesuada suscipit. 
                    Nullam bibendum semper ex ut tristique. Nam sodales tristique tempus. 
                    Praesent vel euismod metus. Donec laoreet felis nec dui tempus, 
                    quis pulvinar lorem sollicitudin. Etiam sollicitudin fermentum pharetra. 
                    Maecenas mollis arcu ut neque semper commodo. Nam sed fermentum elit. 
                    Pellentesque non dolor nulla.

                    Aliquam auctor lectus at euismod scelerisque. Quisque finibus justo 
                    posuere mollis mattis. Donec tincidunt est leo, a luctus dolor scelerisque 
                    et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                    per inceptos himenaeos. Sed ut odio semper dui egestas molestie. Proin 
                    tristique metus in aliquam condimentum. Nullam malesuada erat magna, sed auctor 
                    est mollis commodo. Nulla auctor nulla at mauris iaculis vehicula. Phasellus 
                    mollis eleifend dui, vitae posuere odio pretium vitae.
                    
            </div>
            <button type="submit" className="defaultButton">start</button>
            <div className="findTournament">

                <button type="submit" className="findButton">find</button>
                <input type="id" placeholder="tournament id"/>

            </div>
        </div>
    )
}

export default Home
