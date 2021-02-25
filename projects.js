//var slideIndex1 = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndex4 = 1;
document.addEventListener("DOMContentLoaded", function(event) {
showDivs1(slideIndex1);
showDivs2(slideIndex2);
showDivs3(slideIndex3);
showDivs4(slideIndex4);
});

//Arrow Functions_____________________________
/*
function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}
*/

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

//Button Functions_____________________________
function currentDiv1(n) {
  showDivs1(slideIndex1 = n);
}

function currentDiv2(n) {
  showDivs2(slideIndex2 = n);
}

function currentDiv3(n) {
  showDivs3(slideIndex3 = n);
}

function currentDiv4(n) {
  showDivs4(slideIndex4 = n);
}

//Update Functions_____________________________
/*
function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1"); 
  var dots = document.getElementsByClassName("demo1"); 

  if (n > x.length) {slideIndex1 = 1} //cycle to first
  if (n < 1) {slideIndex1 = x.length} //cycle to last

  //hide images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  //hide dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  console.log(slideIndex1);
  console.log(x.length);
  //show image and dot at slide index
  x[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " w3-white";
}
*/

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2"); 
  var dots = document.getElementsByClassName("demo2"); 

  if (n > x.length) {slideIndex2 = 1} //cycle to first
  if (n < 1) {slideIndex2 = x.length} //cycle to last

  //hide images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  //hids dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  console.log(slideIndex2);
  console.log(x.length);
  //show image and dot at slide index
  x[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " w3-white";
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3"); 
  var dots = document.getElementsByClassName("demo3"); 

  if (n > x.length) {slideIndex3 = 1} //cycle to first
  if (n < 1) {slideIndex3 = x.length} //cycle to last

  //hide images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  //hids dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  console.log(slideIndex3);
  console.log(x.length);
  //show image and dot at slide index
  x[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " w3-white";
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4"); 
  var dots = document.getElementsByClassName("demo4"); 

  if (n > x.length) {slideIndex4 = 1} //cycle to first
  if (n < 1) {slideIndex4 = x.length} //cycle to last

  //hide images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  //hids dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  console.log(slideIndex4);
  console.log(x.length);
  //show image and dot at slide index
  x[slideIndex4-1].style.display = "block";  
  dots[slideIndex4-1].className += " w3-white";
}
