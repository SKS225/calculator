//JavaScript code linked with index.html(Calculator website)


//dev();//popup alert function called 
function dis(x)
{
	document.getElementById("result").value+=x;
}
//JavaScript FIle linked with Calculator Website/index.html


//Calculator working functions
function resl()
{
	//document.getElementById("result").style.backgroundColor="#66ff66";

	let y=document.getElementById("result").value;
	let z=eval(y);
	if(z==undefined)
		document.getElementById("result").style.backgroundColor="ff6666";
	else
		document.getElementById("result").style.backgroundColor="#66ff66";
	
	document.getElementById("result").value=z;
}
function clr()
{
	document.getElementById("result").value="";
}
function dev()
{
	alert("Welcome to the calculator... ;)\nGreetings from: SKS (Website Developer)");
}


// Styling functions
function over(x)
{
	x.style.color="white";
	x.style.backgroundColor="red";
}
function over2(x)
{
	x.style.backgroundColor="Blue";
	x.style.color="white";
}
function out(x)
{
	x.style.backgroundColor="White";
	x.style.color="Red";
}
function over3(x)
{
	x.style.backgroundColor="#00ff00";
	x.style.color="white";
}