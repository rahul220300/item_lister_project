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


var li= document.getElementsByTagName("li");
li[2].textcontent="Rahul";
li[2].style.fontWeight="bold";
li[2].style.backgroundColor="green";
for(var i=0;i<li.length;i++){
  li[i].style.fontWeight="bold";
}