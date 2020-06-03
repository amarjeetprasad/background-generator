var input1=document.querySelector("#input1");
var input2=document.querySelector("#input2");
var body=document.getElementById("b");
var css=document.getElementsByTagName("h3")[0];
function setgradient()
{
	body.style.background=
	"linear-gradient(to right, "
	+ input1.value
	+ ", "
	+ input2.value
	+ ")";

	css.innerHTML = body.style.background + ";";
}


input1.addEventListener("input",setgradient);

input2.addEventListener("input",setgradient);