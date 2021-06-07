$(document).ready(function(){

setUp();
	
$(".grid-item1").on("click", function(e){
	OpenCloseProject(1,$(this).attr('id'));
});
$(".grid-item2").on("click",function(e){
	OpenCloseProject(2,$(this).attr('id'));
});
$(".grid-item3").on("click",function(e){
	OpenCloseProject(3,$(this).attr('id'));
});

//Fade out when hovering over project pictures
$(".grid-item1, .grid-item2, .grid-item3").mouseenter(function(){
	$(this).children(".project-picture").css("opacity",0.3);
});

//Fade in when stop hovering over project pictures
$(".grid-item1, .grid-item2, .grid-item3").mouseleave(function(){
	$(this).children(".project-picture").css("opacity",1);
});

//Copy email when clicked
$("#email-link1-mobile, #email-link1-desktop, #email-link2").on("click", function(){
	var copyText = document.getElementById("myInput");
	  copyText.select();
	  document.execCommand("copy");
	  $(".copyResponse1").attr("id", "copyShow");
	  $(".copyResponse2").attr("id", "copyShow");
});

//Function to close or open function
function OpenCloseProject(projectNum,id){
	//Project 1
	if (projectNum == 1){
		//Project info is closed
		if (id === "closed"){
			//Open project info
			$(".grid-item1").attr('id',"open");
			$(".grid-item-info1").children("h3").html("Description:");
			$(".grid-item-info1").children("p").html("Setting: <b>School</b>  <br> Shepherds hunt is a match 3 game made in Unity by a group of 7 students. Follow the story of the dog 'Shepherd' as he saves the animals of the land from an evil group of animals. <br> Runner up winner at UW Whitewater 2021 MAGD Expo.<br> <b>Link: </b> <a href='https://cabuww.itch.io/shepherds-hunt' target='_blank'>Shepherds Hunt</a>");
			$(".grid-item-role1").children("h3").html("My Role:");
			$(".grid-item-role1").children("p").html("I was one of the game programmers for Shepherds Hunt. I mostly focused on the development of in game features such as player and enemy abilities, piece animations, and basic UI functionality.");
			$(".grid-item-info1").attr("id","divider");
		}
		//Project info is open
		else{
			//Close project info
			$(".grid-item1").attr('id',"closed");
			$(".grid-item-info1").children("h3").html("");
			$(".grid-item-info1").children("p").html("");
			$(".grid-item-role1").children("h3").html("");
			$(".grid-item-role1").children("p").html("");
			$(".grid-item-info1").attr("id","");
		}
	}
	//Project 2
	else if (projectNum == 2){
		//Project info is closed
		if (id === "closed"){
			//Open project info
			$(".grid-item2").attr('id',"open");
			$(".grid-item-info2").children("h3").html("Description:");
			$(".grid-item-info2").children("p").html("Setting: <b>School</b>  <br> One more time is an infinite 2d runner made in Unity. It was made in homage to the band Daft Punk. <br> <b>Link: </b> <a href='https://cabuww.itch.io/one-more-time' target='_blank'>One More Time</a>");
			$(".grid-item-role2").children("h3").html("My Role:");
			$(".grid-item-role2").children("p").html("I was the sole developer on this project so I made all of the art assets and and did all the programming. However, I obtained all the sound assests for this games.");
			$(".grid-item-info2").attr("id","divider");
			$(".grid-item-info2").children("img").attr("id","hideImg");
			$(".grid-item-role2").children("img").attr("id","hideImg");
		}
		//Project info is open
		else{
			//Close project info
			$(".grid-item2").attr('id',"closed");
			$(".grid-item-info2").children("h3").html("");
			$(".grid-item-info2").children("p").html("");
			$(".grid-item-role2").children("h3").html("");
			$(".grid-item-role2").children("p").html("");
			$(".grid-item-info2").attr("id","");
			$(".grid-item-info2").children("img").attr("id","showImg");
			$(".grid-item-role2").children("img").attr("id","showImg");
		}
	}
	//Project 3
	else if (projectNum == 3){
		//Project info is closed
		if (id === "closed"){
			//Open project info
			$(".grid-item3").attr('id',"open");
			$(".grid-item-info3").children("h3").html("Description:");
			$(".grid-item-info3").children("p").html("Setting: <b>School</b>   <br> Texas Ranger is a 2d western platformer made in Unity. You play as a ranger shooting his trusty revolver to make his way through a gangs territory to defeat their boss. Note: there are only 2 levels.");
			$(".grid-item-role3").children("h3").html("My Role:");
			$(".grid-item-role3").children("p").html("This was my first video game I ever made. I developed all parts of this game besides backgrounds and sound assests. I made all the sprites and did all the coding.");
			$(".grid-item-info3").attr("id","divider");
		}
		//Project info is open
		else{
			//Close project info
			$(".grid-item3").attr('id',"closed");
			$(".grid-item-info3").children("h3").html("");
			$(".grid-item-info3").children("p").html("");
			$(".grid-item-role3").children("h3").html("");
			$(".grid-item-role3").children("p").html("");
			$(".grid-item-info3").attr("id","");
		}
	}
}

function setUp(){
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)  
	|| navigator.userAgent.match(/iPad/i)  || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)  || navigator.userAgent.match(/Windows Phone/i)) { 
		$("#grid").attr("class","grid-container-mobile");
		$("#about-me-grid").attr("class","about-me-grid-container-mobile");
		$(".Banner-text").attr("id","banner-text-mobile");
		$(".Banner-email").attr("id","email-link1-mobile");
		$(".Banner-link").attr("id","banner-actions-mobile");
     } 
     else { 
		$("#grid").attr("class","grid-container-desktop");
		$("#about-me-grid").attr("class","about-me-grid-container-desktop");
		$(".Banner-text").attr("id","banner-text-desktop");
		$(".Banner-email").attr("id","email-link1-desktop");
		$(".Banner-link").attr("id","banner-actions-desktop");
     } 
}

});