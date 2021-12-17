setInterval(setClock, 1000) ;


let hourHand = document.querySelector("[hour-hand]") ;
let minutesHand = document.querySelector("[minutes-hand]") ;
let secondHand = document.querySelector("[second-hand]") ;

function setClock() {  

    const currentTime = new Date() ;
    const secondRatio = currentTime.getSeconds() / 60 ;
    const minutesRatio = (secondRatio + currentTime.getMinutes()) / 60 ;
    const hourRatio = (minutesRatio + currentTime.getHours()) / 12 ;

    setRotation(hourHand, hourRatio) ;
    setRotation(minutesHand, minutesRatio) ;
    setRotation(secondHand, secondRatio) ;

}

function setRotation(e, rotationRatio) {  

    e.style.setProperty('--rotation', rotationRatio * 360 )

}

setClock() ;