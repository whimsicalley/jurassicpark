//window alert
function warning() {
	window.alert("WARNING: Dangerous simulated dinosaurs ahead!")
}

//date
var d = new Date ();
document.getElementById("date").innerHTML = d.toDateString();

 //cursor change
var elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "url('images/cursor.png'), auto";