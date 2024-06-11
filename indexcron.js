let milseccond = 0;
let seccond = 0;
let minute = 0;
let hour = 0;
let interval = document.querySelector(".start");
const audioElement=document.querySelector (".soundmusic");
const videoElement = document.querySelector(".conteudo-background")


function milsecconddigits(digit) {
    if (digit <10 ) {
        return ("0" + digit)

    } else if (digit <99) {
        return(digit)
        
    } else {
        return("00")        
    }
}

function twodigits(digit) {
    if (digit < 10) {
        return ("0" + digit)

    } else
        return (digit)
}  




function start() {
    
    interval = setInterval(watch, 100); 
    audioElement.play();
    videoElement.play();

       
    }

function pause() {
    clearInterval(interval);
    audioElement.pause();
    videoElement.pause();

}

function stop() {
    clearInterval(interval);
    milseccond = 0;
    seccond = 0;
    minute = 0;
    hour = 0;
    document.querySelector(".watch").innerHTML = "00:00:00:00";
    audioElement.pause();
    audioElement.currentTime = 0;
    videoElement.pause();
    videoElement.currentTime = 0;    
}

function changeMusic(value) {
    const sources = audioElement.querySelectorAll('source');
    sources.forEach(source => {
        if (source.getAttribute('value') === value) {
            audioElement.pause();
            audioElement.src = source.getAttribute('src');
            audioElement.load();
            audioElement.play();
        }
    });
}
  


function watch () {

    
    milseccond++

    if (milseccond == 10) {
        seccond++
        milseccond = 0
    }

    if (seccond == 60) {
        minute++
        seccond = 0
    }

    if (minute == 60) {
        hour++
        minute = 0
    }


    

    

document.querySelector(".watch").innerHTML = +twodigits(hour) + ":" + twodigits(minute) + ":" + twodigits(seccond) + ":" + milsecconddigits(milseccond);
}
 


