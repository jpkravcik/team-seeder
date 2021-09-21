<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta chartset="utf-8">
    <title>Team Seeder</title>
    <table cellspacing="10">
            <tr>
                <td><a href="#">Log in</a></td>
                <td><a href="#">Sign up</a></td> 
                <td><a href="frequentQA.php">Frequent Q&A</a></td>
            </tr> <!--Might have to redo this or remove the table-->
    </table>
</head>
<body>
<header>
	<!--Main explaining paragraph-->
    <h1>Welcome to Team Seed</h1>
    <p>Welcome Teams and Players!</p>
    <p>TeamSeed is an automatic bracket generator based on the given seeds of Teams and Players! 
        Our aim is to make creating a tournament convenient and easy for everyone!</p>
    <hr>
    <p>Enter team players by ranking</p>
    
    <h3 style="text-align:left;float:left;width:190px">Team 1</h3>
    <h3 style="text-align:left;float:left;width:170px">Team 2</h3>
    <h3 style="text-align:left;float:left;width:150px">Team 3</h3>
    <h3 style="text-align:left;float:left;">Team 4</h3>
    <div style="clear:both;"></div>

<!--Form for inputting player names-->
<form class ='player-submission-form' action='playerRoute.php' method ='post' enctype='multipart/form-data' autocomplete='off'>
        <input type="text" placeholder="Best Player" name ="oneOne" required>
        <input type="text" placeholder="Player" name = "twoOne">
        <input type="text" placeholder="Player" name = "threeOne">
        <input type="text" placeholder="Player" name = "fourOne">
     <br></br>

        <input type="text" placeholder="Player" name = "oneTwo">
        <input type="text" placeholder="Player" name = "twoTwo">
        <input type="text" placeholder="Player" name = "threeTwo">
        <input type="text" placeholder="Player" name = "fourTwo">
    <br> </br>
        <input type="text" placeholder="Player" name = "oneThree">
        <input type="text" placeholder="Player" name = "twoThree">
        <input type="text" placeholder="Player" name = "threeThree">
        <input type="text" placeholder="Player" name = "fourThree">
   
    <br></br>
        <input type="text" placeholder="Player" name = "oneFour">
        <input type="text" placeholder="Player" name = "twoFour">
        <input type="text" placeholder="Player" name = "threeFour">
        <input type="text" placeholder="Worst Player" name = "fourFour">
    <p>
    <button class="btn btn-primary" type="submit" name = "finish" style="background-color:#ffff99;">
          Start</button>
    </p>
</form>


</header>
</body>
</html>
