"use strict";
var $ = function(id) {
	return document.getElementById(id);
};


var processEntries = function() {
	var fname = ($("fname").value);
	var lname = ($("lname").value);
	var mail = ($("mail").value);
	var validEmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Regular Expression
	var subject = ($("subject").value);
	var comments = ($("comments").value);
	

	var error1 ="*";
	var error2 ="*";
	var error3 ="*";
		
	/*check for errors*/
	if(fname == "" || lname == "" || mail == "" || validEmail.test(mail) == false){
		/*validate first name*/
		if(fname == ""){
			error1 = "First name is required.";
		}
		else {
			error1 = ""; 
		}
		$("error1").firstChild.nodeValue = error1;

		/*validate last name*/
		if(lname == ""){
			error2 = "Last name is required.";
		}
		else {
			error2 = ""; 
		}
		$("error2").firstChild.nodeValue = error2;

		/*validate email*/
		if(mail == ""){
			error3 = "Email is required.";
		}
		else if(validEmail.test(mail) == false){
			error3= "Not a valid email."
		}
		else {
			error3 = ""; 
		}
		$("error3").firstChild.nodeValue = error3;
	}
	else{
		var error1 = ""; 
		var error2 = ""; 
		var error3 = ""; 
		document.contact.submit();
	}
};

var clearEntries = function() {
	$("fname").value = "";
	$("lname").value = "";
	$("mail").value = "";
	$("subject").value = "general";
	$("comments").value = "";
	var error1 ="*";
	var error2 ="*";
	var error3 ="*";
	$("error1").firstChild.nodeValue = error1;
	$("error2").firstChild.nodeValue = error2;
	$("error3").firstChild.nodeValue = error3;
};


window.onload = function() {
	$("send").onclick = processEntries;
	$("reset").onclick = clearEntries;
};

