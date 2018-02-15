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
    
    //built in function that saves. It takes two parameters
    //key parmeter is the name of the variable. Then value variable is 
    //the value of the key.
    sessionStorage.setItem(one,two);
}

window.addEventListener("load",doFirst,false);