<!DOCTYPE html>
<html>
<body>
<h2>Team Seeder</h2>
<p>To seed your teams and not your gardens</p>
<script type="text/javascript">  
function autoSeed() {
  var x = document.getElementById("tt").value;
  document.getElementById("demo").innerHTML = x;
}
</script>  
<h1> What is your name? </h1>
<form method="POST">
  <input type="text" id="tt" placeholder="Enter Name: ">
  <input type="checkbox" checked>
</form>
<button onclick="autoSeed()">Submit now</button>
<p id="demo"></p>
</div>