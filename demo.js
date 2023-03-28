// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//getElemntId Method

// console.log(document.getElementById("header-title"));
 //var headerTitle=document.getElementById("header-title");
//  var header = document.getElementById("main-header");
// headerTitle.textContent="Hello";
// headerTitle.innerText="GoodBye";
// header.style.borderBottom="solid 3px #000";
    
// var titlepage = document.getElementsByClassName("list-group");

// titlepage[0].style.fontWeight="bold";
// titlepage[0].style.color="green";


// var li= document.getElementsByTagName("li");
// li[2].textcontent="Rahul";
// li[2].style.fontWeight="bold";
// li[2].style.backgroundColor="green";
// for(var i=0;i<li.length;i++){
//   li[i].style.fontWeight="bold";
// }


//QuerySelctor using

// var items = document.querySelector(".list-group-item:nth-child(2)");
// items.style.backgroundColor="green";
// var visible = document.querySelector(".list-group-item:nth-child(3)");
// visible.style.visibility="hidden";



//querySelectorAll using
// var items2 = document.querySelectorAll(".list-group-item");
// items2[1].style.color="green";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green";
// }





// //trversing the dom

// var itemlist= document.querySelector("items");
// //parentmode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);

// //childNode

// console.log(itemlist.childNodes);
// itemlist.children[1].style.backgroundColor='#yellow';
// console.log(itemlist.children[1]);

// //firstChild
// console.log(itemlist.firstChild);
// itemlist.firstElementChild.textContent='Hello1';
// console.log(itemlist.firstElementChild);

// //lastChild
// console.log(itemlist.lastChild);
// itemlist.lastElementChild.textContent='Hello1';
// console.log(itemlist.lastElementChild);


// //NextSibling

// console.log(itemlist.nextSibling);
// itemlist.nextElementSibling.textContent='Hello1';
// console.log(itemlist.nextElementSibling);

// // previousSibling
// console.log(itemlist.previousSibling);
// itemlist.previousElementSibling.textContent='Hello1';
// console.log(itemlist.previousElementSibling);


//createElement


var newhead = document.createElement('div');
newhead.className='hello';
newhead.id='hello1';
newhead.setAttribute('title','hello head');
var newHeadText = document.createTextNode("Hello");
newhead.appendChild(newHeadText); 

//above items lister 
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newhead);
container.insertBefore(newhead,h1);
