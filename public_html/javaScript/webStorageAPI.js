/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function doFirst(){
    var button = document.getElementById("button");
    button.addEventListener("click",saveStuff,false);
    display()
}

function saveStuff(){
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    
    //built in function setItem in sessionStorage that saves. It takes two parameters
    //key parmeter is the name of the variable. Then value variable is 
    //the value of the key.
    sessionStorage.setItem(one,two);
    
    display();
    
    //reset the text box values to nothing once the items have been saved
    document.getElementById("one").value = "";
    document.getElementById("two").value= "";
}

function display(){
    var rightBox = document.getElementById("rightbox");
    
    //clears the right box
    rightBox.innerHTML = "";
    
    for(var x = 0;x<sessionStorage.length; x++){
        var a = sessionStorage.key(x);
        var b = sessionStorage.getItem(a);
        rightBox.innerHTML += "Name of variable: "+a+"---Value: "+b+"<br />";
    }
    
    
}

window.addEventListener("load",doFirst,false);