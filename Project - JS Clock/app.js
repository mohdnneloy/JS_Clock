//Selecting the Elements

var clock = document.getElementById('clock');


function hexClock(){

 var time= new Date();

    var hours = (time.getHours() %12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if(hours.length < 2){

        hours = '0' + hours;
    }

    if(minutes.length < 2){

        minutes = '0' + minutes;

    }

    if(seconds.length < 2){

        seconds = '0' + seconds;
    }

    var clockT = hours + ':' + minutes + ':' + seconds;

 

    clock.textContent = clockT;
}





hexClock();
setInterval(hexClock, 1000);
