/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function doFirst(){
    var button = document.getElementById("button");
    button.addEventListener("click",saveStuff,false);
}

function saveStuff(){
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    
    //built in function setItem in sessionStorage that saves. It takes two parameters
    //key parmeter is the name of the variable. Then value variable is 
    //the value of the key.
    sessionStorage.setItem(one,two);
    
    display(one);
}

function display(one){
    var rightBox = document.getElementById("rightbox");
    var two = sessionStorage.getItem(one);
    rightBox.innerHTML = "Name of variable: "+one+"<br /> Value: "+two;
}

window.addEventListener("load",doFirst,false);