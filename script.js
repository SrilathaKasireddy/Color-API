
var h1=document.createElement("h1");
let textnode=document.createTextNode("Color API🌈");
h1.append(textnode);
h1.setAttribute("id","heading")
var button=document.createElement("input");
button.setAttribute("type","button");
button.setAttribute("class","text-center")
button.setAttribute("id","button");
button.setAttribute("value","CLICK ME!!!")

var div=document.createElement("div");
div.setAttribute("class","container")
div.setAttribute("id","result")

var div1=document.createElement("div");
div1.setAttribute("class","container")
div1.setAttribute("id","result1")


var div2=document.createElement("div");
div2.setAttribute("id","result2");
div2.setAttribute("class","container")
document.body.append(h1,button,div,div1,div2)

button.addEventListener("click",color)
async function color(){

var url=await fetch("https://x-colors.herokuapp.com/api/random")
//console.log(url);
var res= await url.json();
//console.log(res)





document.getElementById("result").innerHTML=`hex:${res.hex}`
document.getElementById("result1").innerHTML=`rgb:${res.rgb}`
document.getElementById("result2").innerHTML=`hsl:${res.hsl}`



}





