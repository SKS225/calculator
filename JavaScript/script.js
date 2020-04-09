//JavaScript code linked with index.html(Calculator website)


function dis(x)
{
	document.getElementById("result").value+=x;
}

//Calculator working functions
function resl()
{
	let y=document.getElementById("result").value;
	let z=eval(y);
	if(z==undefined)
	{
		document.getElementById("result").style.backgroundColor="#ff6666";
	}
	else
	{
		document.getElementById("result").style.backgroundColor="#66ff66";
	}
	
	document.getElementById("result").value=z;
}
function clr()
{
	document.getElementById("result").style.backgroundColor="#93e5fa";
	document.getElementById("result").value="";
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
	x.style.borderColor="blue";
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
