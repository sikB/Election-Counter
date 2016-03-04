function timeTillDoomsday(){
	var endTime = new Date(2016, 09, 7, 21, 0, 0, 0);
	var now = new Date();
	var endTimeStamp = Date.parse(endTime); 
	var nowTimeStamp = Date.parse(now);
	var timeDifference = endTimeStamp - nowTimeStamp;

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
		seconds: seconds
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

	var timeObjectReturned = timeTillDoomsday();
	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML = timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;



};

function updateTimer(){
	if(updateTimer == 2016, 2, 4, 16, 33, 0, 0){
	document.getElementById('trump-gif').style.visibility = "hidden";
	document.getElementById('hillary-gif').style.visibility = "hidden";
	document.getElementById('explosion-gif').style.visibility = "visible";
}
;

};


initTimer();

setInterval(initTimer, 500
)



