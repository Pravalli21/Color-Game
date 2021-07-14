var square = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newcolor = document.querySelector("#reset");
var easybtn = document.querySelector(".easybtn");
var mediumbtn = document.querySelector(".mediumbtn");
var hardbtn = document.querySelector(".hardbtn");
var rancolor;
var selectedbtn = "hard";
var selectedcolor;
var clickedcolor;


function randomcolor(randcolor){
	for(var i = 0; i < randcolor; i++){
		var red = Math.floor(Math.random() * 256);
	    var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
	    var rgb = "rgb("+red+","+green+","+blue+")";
	    square[i].style.background = rgb;
  }
  selectedcolor = square[anynum(9)].style.backgroundColor;
	colordisplay.textContent = selectedcolor;
	h1.style.backgroundColor = "steelblue";
	messagedisplay.textContent = "";
	newcolor.textContent = "NEW COLORS";
}
randomcolor(9);

function hardfun(){
	rancolor = 9;
    randomcolor(rancolor);
    selectedbtn = "hard";
    for(var j = 0; j < 9; j++){
    	square[j].style.display = "block";
    }
    selectedcolor = square[anynum(9)].style.backgroundColor;
	colordisplay.textContent = selectedcolor;
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	mediumbtn.classList.remove("selected");
	

}

hardbtn.addEventListener("click", hardfun);
	
function mediumfun(){
	rancolor = 6;
	randomcolor(rancolor);
	selectedbtn = "medium";
    for(var i = 8; i > 5; i--){
    	square[i].style.display = "none";
    
    }
    for(var j = 0; j < 6; j++){
    	square[j].style.display = "block";
    }
    selectedcolor = square[anynum(6)].style.backgroundColor;
	colordisplay.textContent = selectedcolor;
	easybtn.classList.remove("selected");
	hardbtn.classList.remove("selected");
	mediumbtn.classList.add("selected");
	
    
}

mediumbtn.addEventListener("click", mediumfun);
	

function easyfun(){
	rancolor = 3;
	randomcolor(rancolor);
	selectedbtn = "easy";
	for(var i = 8; i > 2; i--){
		square[i].style.display = "none";
	}

	selectedcolor = square[anynum(3)].style.backgroundColor;
	colordisplay.textContent = selectedcolor;
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	mediumbtn.classList.remove("selected");

	
}

easybtn.addEventListener("click", easyfun);

newcolor.addEventListener("click", function(){
	if(selectedbtn == "easy"){
		easyfun();
	}
	if(selectedbtn == "medium"){
		mediumfun();
	}
	if(selectedbtn == "hard"){
		hardfun();
	}
});

function anynum(num){
	var number = Math.floor(Math.random() * num);
	return number;

}

for(var s = 0; s < 9; s++){
	square[s].addEventListener("click",function(){
		clickedcolor = this.style.backgroundColor;
		if(selectedcolor == clickedcolor){
			for(var j= 0; j < 9; j++){
				square[j].style.backgroundColor = selectedcolor;
			}
			messagedisplay.textContent = "You Win";
			h1.style.backgroundColor = selectedcolor;
			newcolor.textContent = "PLAY AGAIN";
		}
		else {
			this.style.backgroundColor = "black";
			messagedisplay.textContent = "Try Again";
		}

	});
}