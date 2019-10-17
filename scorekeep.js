
// Title : Javascript File for Score Keeper
// Author : Angad Sudesh Srivastav
// Date and Time : {14th October 2019 (3:47 pm)}
// Objective : To make a js file for our htl score keeper which will make it interactive

// Variables Used : 

var Player1Button = document.getElementById("p1b");
var Player2Button = document.getElementById("p2b");
var ResetButton = document.getElementById("res");
var ChangeUpto = document.getElementById("upto");
var p1score = 0;
var p2score = 0;
var winningscore = 5;
var gameOver = false;


ChangeUpto.addEventListener("click", function(){
	winningscore = Number(prompt("Enter the upto?"));
	document.getElementById("lims").textContent = winningscore;
});

Player1Button.addEventListener("click", function(){
	if(!gameOver){
	p1score++;
	if(p1score === winningscore){
		gameOver = true;
		document.getElementById("p1s").style.color = "green";
	}
	document.getElementById("p1s").textContent = p1score;
	}
});

Player2Button.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		if(p2score === winningscore){
			gameOver = true;
			document.getElementById("p2s").style.color = "green";
		}
		document.getElementById("p2s").textContent = p2score;
	}
});

ResetButton.addEventListener("click", function(){
	p1score = 0;
	p2score = 0;
	gameOver = false;
	document.getElementById("p1s").textContent = p1score;
	document.getElementById("p2s").textContent = p2score;
	document.getElementById("p1s").style.color = "black";
	document.getElementById("p2s").style.color = "black";
});
