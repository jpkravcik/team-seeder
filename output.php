
<?php
session_start();
$entry1 = $_SESSION['entry1'];
$entry2 = $_SESSION['entry2'];
$entry3 = $_SESSION['entry3'];
$entry4 = $_SESSION['entry4'];
$entry5 = $_SESSION['entry5'];
$entry6 = $_SESSION['entry6'];
$entry7 = $_SESSION['entry7'];
$entry8 = $_SESSION['entry8'];
$entry9 = $_SESSION['entry9'];
$entry10 = $_SESSION['entry10'];
$entry11 = $_SESSION['entry11'];
$entry12 = $_SESSION['entry12'];
$entry13 = $_SESSION['entry13'];
$entry14 = $_SESSION['entry14'];
$entry15 = $_SESSION['entry15'];
$entry16 = $_SESSION['entry16'];

?>

<html>
<head>
<link rel="stylesheet" href = "output-styles.css">

</head>

<header>
  <div>
    <h1>Output Page</h1>

    <h2 align="right" valign="top">Username</h2>
  </div>
</header>
<body>
  <div class = "bracket">
    <!-- Round 1 -->
    <div class = "round">
      <div class = "matchup">
        <div class = "entry"><?php echo $entry1; ?></div>
        <div class = "entry"><?php echo $entry2; ?></div>
      </div>

      <div class = "matchup">
        <div class = "entry"><?php echo $entry3; ?></div>
        <div class = "entry"><?php echo $entry4; ?></div>
      </div>

      <div class = "matchup">
        <div class = "entry"><?php echo $entry5; ?></div>
        <div class = "entry"><?php echo $entry6; ?></div>
      </div>

      <div class = "matchup">
        <div class = "entry"><?php echo $entry7; ?></div>
        <div class = "entry"><?php echo $entry8; ?></div>
      </div>

      <div class = "matchup">
        <div class = "entry">entry 9</div>
        <div class = "entry">entry 10</div>
      </div>

      <div class = "matchup">
        <div class = "entry">entry 11</div>
        <div class = "entry">entry 12</div>
      </div>

      <div class = "matchup">
        <div class = "entry">entry 13</div>
        <div class = "entry">entry 14</div>
      </div>

      <div class = "matchup">
        <div class = "entry">entry 15</div>
        <div class = "entry">entry 16</div>
      </div>
    </div>

  <!-- Round 2 -->
    <div class = "round">
      <div class = "matchup">
        <div class = "entry">entry 1</div>
        <div class = "entry">entry 4</div>
      </div>

      <!-- bad but simple way to center the second round between the matchups -->
      <div class="buffer"></div>

      <div class = "matchup">
        <div class = "entry">entry 6</div>
        <div class = "entry">entry 8</div>
      </div>

      <div class="buffer"></div>

      <div class = "matchup">
        <div class = "entry">entry 9</div>
        <div class = "entry">entry 11</div>
      </div>

      <div class="buffer"></div>

      <div class = "matchup">
        <div class = "entry">entry 14</div>
        <div class = "entry">entry 16</div>
      </div>
    </div>

    <!-- round 3 -->
    <div class = "round">
      <div class = "matchup">
        <div class = "entry">entry 1</div>
        <div class = "entry">entry 8</div>
      </div>

      <div class="buffer3"></div>

      <div class = "matchup">
        <div class = "entry">entry 9</div>
        <div class = "entry">entry 16</div>
      </div>
    </div>

    <!-- round 4 -->
    <div class = "round">
      <div class = "matchup">
        <div class = "entry">entry 1</div>
        <div class = "entry">entry 9</div>
      </div>
    </div>

    <!-- winner -->
    <div class = "round">
      <div class = "matchup">
        <div class = "entry">entry 1</div>
      </div>
    </div>

    <!-- Team intro video -->
    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/_HRX5jSZ_7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

  </div>
</body>
</html>
