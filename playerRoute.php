<?php 
session_start();

//sets user-given player names to session variables, will be obsolete in final build
if(isset($_POST['finish'])){
    $_SESSION['entry1'] = $_POST['oneOne'];
    $_SESSION['entry2'] = $_POST['fourFour'];
    $_SESSION['entry3'] = $_POST['threeTwo'];
    $_SESSION['entry4'] = $_POST['twoThree'];
    $_SESSION['entry5'] = $_POST['fourOne'];
    $_SESSION['entry6'] = $_POST['oneFour'];
    $_SESSION['entry7'] = $_POST['twoTwo'];
    $_SESSION['entry8'] = $_POST['threeThree'];
    $_SESSION['entry9'] = $_POST['twoOne'];
    $_SESSION['entry10'] = $_POST['threeFour'];
    $_SESSION['entry11'] = $_POST['fourTwo'];
    $_SESSION['entry12'] = $_POST['oneThree'];
    $_SESSION['entry13'] = $_POST['threeOne'];
    $_SESSION['entry14'] = $_POST['twoFour'];
    $_SESSION['entry15'] = $_POST['oneTwo'];
    $_SESSION['entry16'] = $_POST['fourThree'];
    
    header ("location: output.php");
}
?>