let gameRecord = 0;
document.addEventListener("DOMContentLoaded", function(){
    const circle = document.getElementById("circle");
    const gameZone = document.getElementById("game-zone");
    const clickCount = document.getElementById("click-count");
    const start = document.getElementById("btn-img");
    const time = document.getElementById("time");
    const record = document.getElementById("record");
    var count;
    var countdownTime;
    var timeInterval ;
    var gameRun;
    var circleInt;
    var timeInt;

    // if you click the start button, the game will run which means the time start counting bac, the circle start moving, and the click count start counting
    const startGame = function(){
        count = 0;
        countdownTime = 60;
        timeInterval = 1600;
        gameRun = true;
            clearInterval(circleInt);
            clearInterval(timeInt);
        if(gameRun){
            circleInt = setInterval(moveCircle, timeInterval);
            timeInt = setInterval(countdown, 1000);
            
        }
    }

// this timer i looked on w3school of applying maths
    const countdown = function(){
        const minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        time.innerHTML = `${minutes}:${seconds}`;
        if(countdownTime > 0){
            countdownTime--;
        }else{
            gameRecord = count;
            record.textContent = gameRecord;
            gameRun = false;
        }

        // this basic algorith was set by my idea of the increasing difficulty in the speed of the circle along the time of the game. The main problem was that i was not able to think of a more complex algorith which can make the increasing go more smoothly. So, i can only set a cycle of 5 seconds for speed rising
        if(countdownTime > 0){
            if(countdownTime % 5 === 0){
                timeInterval = timeInterval*0.88;
                console.log(timeInterval);
                clearInterval(circleInt)
                circleInt = setInterval(moveCircle, timeInterval);
            }
        }
    }

    // the function for the circle is after the click of start GamepadButton, it will movw randomly anywhere in the viewport
    const generateRandomPosition = function(){
        const gameWidth = gameZone.clientWidth;
        const gameHeight = gameZone.clientHeight;
        const circleWidth = circle.clientWidth;
        const circleHeight = circle.clientHeight;

        const x = Math.floor(Math.random() * (gameWidth - circleWidth));
        const y = Math.floor(Math.random() * (gameHeight - circleHeight));

        return {x,y}
    }

    const moveCircle = function(){
        if(gameRun){
            const newPosition = generateRandomPosition();
            circle.style.left = `${newPosition.x}` + "px";
            circle.style.top = `${newPosition.y}` + "px";
        }
    };

    const click = function(){
        if(gameRun){
            count++;
            clickCount.textContent = count;
        }
    }

    circle.addEventListener("click", click);
    start.addEventListener("click", startGame);
    
})

