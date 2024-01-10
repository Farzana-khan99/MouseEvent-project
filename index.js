document.getElementById("imag").src ="images/of.png"
document.getElementById("text").innerHTML = "off"
document.getElementById("off").style.backgroundColor ="#fac43b"
    document.getElementById("off").style.color ="#fff"



function onbtn(){
    document.getElementById("imag").src ="images/on.png"
    document.getElementById("text").innerHTML = "on"
    document.getElementById("on").style.backgroundColor ="#fac43b"
    document.getElementById("on").style.color ="#fff"
    document.getElementById("off").style.backgroundColor ="#fff"
    document.getElementById("off").style.color ="#000"
  

}

function offbtn(){
    document.getElementById("imag").src ="images/of.png"
    document.getElementById("text").innerHTML = "off"
   
    document.getElementById("on").style.backgroundColor ="#fff"
    document.getElementById("on").style.color ="#000"
    document.getElementById("off").style.backgroundColor ="#fac43b"
    document.getElementById("off").style.color ="#fff"
   
    
}