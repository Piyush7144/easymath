var x;
var y;
function function2(){

x = Math.floor(Math.random()*100);
y = Math.floor(Math.random()*100);
var ele = document.getElementById("pastehere");
var text  = "";
text += "X + " +y+"  ="+x;
ele.innerHTML = text;
}
function function1(){
    var p = document.getElementById("test").value;
    var z = document.getElementById("pastehere3");
    var text2 = "";
    if(button1.innerHTML == "Next Question")
    {
        button1.innerHTML = "Try it";
        button1.style.background = "orange";
       // z.innerHTML = null;
        //function2();
        window.location.reload();
        return;
    }
    if(p == (x-y))
    {    
        z.style.color = "green";
         text2 += "Correct!<br>";
         text2 += " X   = &nbsp;"+Number(x-y);
         text2 += "<br>True";
         z.innerHTML = text2;
         button1.innerHTML = "Next Question";
         button1.style.background =  "green";
    }
    else if(p != (x-y))
    {
         z.style.color = "red";
         text2 += "Wrong!<br>";
         text2 += "X  = &nbsp;"+Number(x-y);
         text2 += "<br>False";
         z.innerHTML = text2;
    }
}

