function timeTillDoomsday(){
	var endTime = new Date(2016, 10, 8, 19, 0, 0, 0);
	var now = new Date();
	var endTimeStamp = Date.parse(endTime); 
	var nowTimeStamp = Date.parse(now);
	var timeDifference = endTimeStamp - nowTimeStamp;

	if(timeDifference <= 0){
		var finished = true}
		else{var finished = false;}


	var timeStampInSeconds = timeDifference/1000;
	var seconds = Math.floor(timeStampInSeconds  % 60);
	var minutes = Math.floor((timeStampInSeconds / 60) % 60);
	var hours = Math.floor(timeStampInSeconds /  (60 * 60) % 24);
	var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
	var weeks = Math.floor(timeStampInSeconds  / (60 * 60 * 24 * 7));

	var timeObject = {
		weeks: weeks,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
		finished: finished
	};


	return timeObject;

};

function initTimer(){
	var timer = document.getElementById('countdown-wrapper');
	var weeks = document.getElementById('weeks');
	var days = document.getElementById('days');
	var hours = document.getElementById('hours');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');



	//This next line calls the timeTillDoomsday function
	var timeObjectReturned = timeTillDoomsday();
	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML = timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;

	if(timeObjectReturned.finished == true){
	window.clearInterval(myInt);
    document.getElementById('trump-gif').style.visibility = "hidden";
	document.getElementById('hillary-gif').style.visibility = "hidden";
	document.getElementById('explosion').style.visibility = "visible";
	document.getElementById('h3').style.visibility = "hidden";
	document.getElementById('play-dragon-game').style.visibility = "hidden";
	document.getElementById('stop-dragon-game').style.visibility = "hidden";
	document.getElementById('explosion').style.visibility = "visible";
	document.getElementById('time-wrapper').style.visibility = "hidden";
	document.getElementById('h1').style.visibility = "hidden";
	document.getElementById('dragon-wrapper').style.visibility = "hidden";
	
}



function updateTimer(){

}
;

;}

var myInt = setInterval(initTimer, 500);



function throwDie(){
	var randomDie = Math.round(Math.random()*5)+1;
	var imageName = "dice.roller/dice-img/d" + randomDie + ".gif";
	document.images['myDie1'].src = imageName;

	var randomDie2 = Math.round(Math.random()*5)+1;
	var imageName2 = "dice.roller/dice-img/d" + randomDie2 + ".gif";
	document.images['myDie2'].src = imageName2;

	var sumDie = randomDie + randomDie2;

	var health = document.getElementById("yourhealth");
	if((randomDie === 2) && (randomDie2 === 2)){
	yourhealth.value= health.value - 30;}

	if(sumDie === 6){
		dragonhealth.value = dragonhealth.value - 80;

	}

	if(health.value <= 0){
		alert("You got burned to a crisp!!")
		yourhealth.value= health.value + 100;
		dragonhealth.value = dragonhealth.value + 100;

	}

	var healthDragon = document.getElementById("dragonhealth");
	if((randomDie === 2) || (randomDie2 === 4)){
	dragonhealth.value = dragonhealth.value - 10;}

	if(sumDie === 12){
		yourhealth.value = yourhealth.value - 50;}

	if(dragonhealth.value <= 0){
		alert("You've defeated the mighty Dragon!! Your life is spared")
		dragonhealth.value = dragonhealth.value + 100;
		yourhealth.value= health.value + 100;


	}
	
}


function showDragonGame(){
	document.getElementById('dragon-wrapper').style.visibility = "visible";

}

function stopDragonGame(){
	document.getElementById('dragon-wrapper').style.visibility = "hidden";
}
