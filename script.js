//Question 1

document.getElementById("container");

//Question 2

document.querySelector("#container");

//Question 3

document.getElementsByClassName("second");

//Question 4

document.querySelector("ol > .third")

//Question 5

var node = document.createElement("ul");
var textnode = document.createTextNode("Hello");
node.appendChild(textnode);
document.getElementById("container").appendChild(node);

//Question 6

document.querySelector(".footer").appendChild(document.createElement("div")).className = "main"

//Question 7 

document.querySelector(".footer").appendChild(document.createElement("div")).className = "main"

//Question 8 

var node = document.createElement("li");

//Question 9

var textnode = document.createTextNode("four");
node.append(textNode);

//Question 10 

document.querySelector("ul").append(node);

//Question 12

let nox = document.querySelectorAll("#container > ul > li")
for(let i=0; i<nox.length; i++){    
    nox[i].style.backgroundColor = "green"
}

//Question 13

document.querySelector(".footer").remove()