function validate() {
	var userName = document.getElementById("idUserName").value;
	var password = document.getElementById("idPwd").value;
	if (userName === "Atul" & password === "Atul") {
		document.write("<h1>Login Successful</h1>");
	}
	else {
		var oLabel = document.getElementById("idMsg");
		oLabel.innerText = "Username and Password is Incorrect";
	    blinkEffect("#idMsg");}
	}
function magic() {
	var oMagic = document.getElementsByClassName("box-title");
	for (i = 0; i < oMagic.length; i++) {
		oMagic[i].style.color = "Red";
		oMagic[i].style.backgroundColor = "Yellow";
		oMagic[i].style.fontFamily = "cursive";
	}
}
function dynamicAdd() {
	var oDiv = document.getElementById("bringItOn");
	var oNewElement = document.createElement("h4");
	var oText = document.createTextNode("MS Dhoni");
	oNewElement.appendChild(oText);
	oDiv.appendChild(oNewElement);
}
function magicAgain() {
	$(".box-title").css("background-color", "black").css("color", "aqua");
}
function disAppear() {
	//$(".box").hide();
//call back function, anonymous function
	$(".box").fadeOut(5000, function () {
		alert("fadeout is complete");
	});
}
function appear() {
	//$(".box").show();
	$(".box").fadeIn(5000);
}
function blinkEffect(selector){
	$(selector).fadeOut(1000,function(){
		$(this).fadeIn(1000,function(){
			blinkEffect(selector);
		})
	})
}
function dancingFields(){
	$("input").animate({
		width:"10px",
		height:"10px"
	},500,function(){
		$(this).animate({
			width:"200px",
			height:"80px"
		},500,function(){
			dancingFields();
		}); 
	});
}