//console.log("connected")
//1 Select the section with an id of container without using querySelector.
document.getElementById("container");
//2 Select the section with an id of container using querySelector.
const container = document.querySelector("#container");
//3 Select all of the list items with a class of “second”.
const second = document.querySelectorAll(".second");
//4 Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.getElementsByClassName("ol, .third")
//5 Give the section with an id of container the text “Hello!”.
//container.innerHTML = "Hello!";
//6 Add the class main to the div with a class of footer.
const foot = document.querySelector('.footer');
foot.classList.add('main');
//7 Remove the class main on the div with a class of footer.
foot.classList.remove('main');
//8 Create a new li element.
const newLi = document.createElement('li');
//9 Give the li the text “four”.
newLi.innerText = "four";
//10 Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newLi);
//11 Loop over all of the lis inside the ol tag and give them a background color of “green”.
const listInOl = document.querySelectorAll('ol li');
//for( let i = 0; i < listInOl.length; i++) {
    //listInOl[i].style.backgroundColor = "green";
//};
for (let list of listInOl) {
    list.style.backgroundColor = "green";
};
//12 Remove the div with a class of footer
const footer = document.querySelector('.footer');
footer.remove();