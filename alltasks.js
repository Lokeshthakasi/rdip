//Start of Task -1:

var exp = '', number,decimal,equal,operator,allowSR = true;
var textview = document.forms['myForm']['textview'];

function insertNum(num)
{
	if(equal)
	{
		exp = num;
		textview.value = exp;
		number = true;
		equal = false;
	}
	else
	{
		exp = textview.value + num;
		textview.value = exp;
		number = true;
	}
	if (operator) decimal = false;
	SR('a')
}

function insertOp(op) 
{
	textview.value = exp + op;
	operator = true;
	equal = false;
	allowSR = false;
	SR('a')
}

function insertDec()
{
	if(number && !decimal)
	{
		textview.value = exp + '.';
		decimal = true;
		operator = false;
	}
}

function equalTo()
{
	if (exp)
	{
		exp = eval(exp);
		textview.value = exp;
		equal = true;
		decimal = false;
		number = false;
		allowSR = true;
		SR('a');
	}
}

function clean()
{
	exp = '';
	textview.value = exp;
	decimal = false;
}

function back()
{
	exp = textview.value;
	exp = exp.substring(0,exp.length - 1);
	textview.value = exp;
}

function SR(x)
{
	if(x== 'r')
	{
		exp = Math.sqrt(exp);
		textview.value = exp;
	}
	else if (x == 'absol')
	{
		exp = Math.abs(exp);
		textview.value = exp;
	}
	else if (x =='a' && allowSR)
	{
		document.getElementById('r').disabled = false;
		document.getElementById('absol').disabled = false;
	}
	else if(!allowSR)
	{
		document.getElementById('r').disabled = true;
		document.getElementById('absol').disabled = true;
	}
}

// End-of Task -1. 


// Start of Task -2:

function validation()
{
	var a = document.form.name.value;
if(a=="")
{
alert("Please Enter Your Name");
document.form.name.focus();
return false;
}
if(!/^[A-Za-z ]+[A-Za-z0-9]*$/g.test(document.form.name.value))
{
alert("Please Enter Only Characters");
document.form.name.select();
return false;
}

var b = document.form.mobile.value;
if(b=="")
{
alert("Please Enter Your Phone Number");
document.form.mobile.focus();
return false;
}
if(isNaN(b))
{
alert("Please Enter Valid Phone Number");
document.form.mobile.focus();
return false;
}
if(b.length<10)
{
	alert("Phone Number should be minimum 10 digits");
	form.mobile.focus();
	return false;
}

var c = document.getElementById("email").value;
if(c == "")
{
	alert("Please Enter Your Email Id ");
	return false;
}
if(c.indexOf('@')<=0)
{
	alert("Please Enter Valid Email-Id");
	return false;
}
if((c.charAt(c.length-4)!='.') && (c.charAt(c.length-3)!='.'))
{
	alert("Invalid Email-Id");
	return false;
}

return true;
}
// End of Task-2

//Start of Task-3

function palindrome( word)
{

if(word.length>2)
{

 str1=word.split("").reverse().join("");

 if(word==str1)
 {
 	return true;
 }
  else
  {
	return false;
  }
 }
else
 	return false;
}

function anagram(str1,str2)
{
	 var len1 = str1.split(' ').length-1;
	 len1=parseInt(len1)
	 m=len1
	  var len2 = str2.split(' ').length-1;
	  len2=parseInt(len2)
	  n=len2

if(str1==str2)
{
return true;
}

else 
{

var newstr1 = str1.toLowerCase().split("").sort().join();

 var newstr2 = str2.toLowerCase().split("").sort().join();
 
if(len1 >1 && len1==m)
{
	s1=newstr1.slice(i+2);

}
else if(len1==1 && len1==m)
{
	s1=newstr1.slice(i+1);
}
else
{
	s1=newstr1
}

 if(len2>1 && len2==n)
{
	s2=newstr2.slice(j+2);

}
else if(len2==1 && len2==n)
{
	s2=newstr2.slice(j+1);
}
else
{
	s2=newstr2;
}

 if(s1 == s2){
    return (true);
  }
  else{
    return (false);
  }
}
}
//End of Task-3


//Start of Task-4

function num1()
{
	var a1=Math.floor(Math.random()*(1000-1))
	document.getElementById("n1").value=a1;
	return a1;

}
function num2()
{
	var a2=Math.floor(Math.random()*(1000-1))
	document.getElementById("n2").value=a2;
	return a2;

}
function winpredictor(i,j)
{
  i=i%10;
  j=j%10;
  var map1 = new Map();
  map1.set(0,1);
 map1.set(1,1);
 map1.set(2,2);
 map1.set(3,3);
map1.set(4,1);
map1.set(5,1);
 map1.set(6,2);
map1.set(7,2);
 map1.set(8,3);
 map1.set(9,3);
  i1=map1.get(i);
  j1=map1.get(j);
 
  var map = new Map();

 map.set(1,"Human");
  map.set(2,"Cockroach"); 
  map.set(3,"Nuclear Bomb"); 
  map.set(4,"Tie Break");
  if(i1==3 && j1==3 || i1==1 && j1==1 || i1==2 && j1==2)
  {
  	if(i1==1 && j1==1)
  	{
  		document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(1);
  	return "It is a "+(map.get(4));
  }
  if(i1==2 && j1==2)
  	{
  		document.getElementById("h2").innerHTML=map.get(2)+" Vs "+map.get(2);
  	return "It is a"+(map.get(4));
  }
  if(i1==3 && j1==3)
  	{
  		document.getElementById("h2").innerHTML=map.get(3)+" Vs "+map.get(3);
  	return "It is a"+(map.get(4));
  }
  }
  else if(i1==1 && j1==2 || i1==2 && j1==1)
  {
  	document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(2);
  	return "The Winner is "+(map.get(1));
  }
   else if(i1==2 && j1==3 || i1==3 && j1==2)
   	
  {
  	document.getElementById("h2").innerHTML=map.get(2)+" Vs "+map.get(3);
  	return "The Winner is "+(map.get(2));
  }
   else if(i1==1 && j1==3 || i1==3 && j1==1)
  
  {
  	 	document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(3);
  	return "The Winner is "+(map.get(3));
  }

}

//End of Task-4

