const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const image = document.getElementById("image");
const message = document.getElementById("message");
let clicks = 0;

// Screen Sizing
if(screen.width < 500){
    yesBtn.addEventListener('click', () => {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        image.style.display = "block";
        image.src = "assets/Cat4.gif"
        image.style.height = 300 + "px";
        message.style.fontSize = 1.5 + "em";
        message.innerHTML = "Yehey I love you po!"
        noBtn.setAttribute('disabled', 'true'); 
    });
    noBtn.addEventListener('click', () => {
        clicks+=1;
        if(clicks === 1){
            yesBtn.style.height = 50 + "px";
            yesBtn.style.width = 55 + "px";
            yesBtn.style.fontSize = 1 + "em";
            noBtn.textContent = "Are you sure?";
        }
        else if (clicks === 2){
            yesBtn.style.height = 80 + "px";
            yesBtn.style.width = 100 + "px";
            noBtn.textContent = "Really sure?";
        }
        else if (clicks === 3){
            yesBtn.style.height = 120 + "px";
            yesBtn.style.width = 140 + "px";
            noBtn.textContent = "Really really sure?";
        }
        else if (clicks === 4){
            yesBtn.style.height = 180 + "px";
            yesBtn.style.width = 170 + "px";
            yesBtn.style.fontSize = 1.5 + "em";
            noBtn.textContent = "101% sure?";
        }
        else if (clicks === 5){
            yesBtn.style.height = 220 + "px";
            yesBtn.style.width = 200 + "px";
            noBtn.textContent = "Just think about it!";
        }
        else if (clicks === 6){
            yesBtn.style.height = 250 + "px";
            yesBtn.style.width = 220 + "px";
            noBtn.textContent = "Please Baby! Please!!";
        }
        else if (clicks === 7){
            yesBtn.style.height = 265 + "px";
            yesBtn.style.width = 240 + "px";
            noBtn.textContent = "If you say no, I will be really xad :<";
        }
        else if (clicks === 8){
            yesBtn.style.height = 280 + "px";
            yesBtn.style.width = 250 + "px";
            yesBtn.style.margin = 10 + "px";
            yesBtn.style.fontSize = 2.5 + "em";
            noBtn.textContent = "I will be very sad hmmm.....";
        }
        else if (clicks === 9){
            yesBtn.style.height = 295 + "px";
            yesBtn.style.width = 280 + "px";
            noBtn.textContent = "I will be very very very sad... :<";
        }
        else if (clicks === 10){
            yesBtn.style.height = 315 + "px";
            yesBtn.style.width = 320 + "px";
            noBtn.style.display = "none";
            image.style.display = "none";
        }
    });
}
else{
    yesBtn.addEventListener('click', () => {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        image.src = "assets/Cat4.gif"
        image.style.height = 350 + "px";
        message.innerHTML = "Yehey I love you po!"
        noBtn.setAttribute('disabled', 'true'); 
    });
    noBtn.addEventListener('click', () => {
        clicks+=1;
        if(clicks === 1){
            yesBtn.style.marginTop = 10 + "px"
            yesBtn.style.marginBottom = 10 + "px"
            yesBtn.style.fontSize = 35 + "px";
            yesBtn.style.padding = 20 + "px";
            noBtn.textContent = "Are you sure?";
        }
        else if (clicks === 2){
            yesBtn.style.fontSize = 70 + "px";
            yesBtn.style.padding = 25 + "px";
            noBtn.textContent = "Really sure?";
        }
        else if (clicks === 3){
            yesBtn.style.fontSize = 90 + "px";
            yesBtn.style.padding = 30 + "px";
            noBtn.textContent = "Really really sure?";
        }
        else if (clicks === 4){
            yesBtn.style.fontSize = 120 + "px";
            yesBtn.style.padding = 35 + "px";
            noBtn.textContent = "101% sure?";
        }
        else if (clicks === 5){
            yesBtn.style.fontSize = 160 + "px";
            yesBtn.style.padding = 40 + "px";
            noBtn.textContent = "Just think about it!";
        }
        else if (clicks === 6){
            yesBtn.style.fontSize = 200 + "px";
            yesBtn.style.padding = 45 + "px";
            noBtn.textContent = "Please Baby!";
        }
        else if (clicks === 7){
            yesBtn.style.fontSize = 250 + "px";
            yesBtn.style.padding = 50 + "px";
            noBtn.textContent = "If you say no, I will be really xad :<";
        }
        else if (clicks === 8){
            yesBtn.style.marginTop = -10 + "px"
            yesBtn.style.fontSize = 300 + "px";
            yesBtn.style.padding = 55 + "px";
            noBtn.textContent = "I will be very sad...";
        }
        else if (clicks === 9){
            yesBtn.style.marginTop = 120 + "px"
            yesBtn.style.fontSize = 350 + "px";
            yesBtn.style.padding = 60 + "px";
            noBtn.textContent = "I will be very very very sad... :<";
            noBtn.style.marginBottom = 15 + "px";
        }
        else if (clicks === 10){
            yesBtn.style.marginTop = 200 + "px"
            yesBtn.style.marginBottom = 100 + "px"
            yesBtn.style.fontSize = 400 + "px";
            yesBtn.style.padding = 65 + "px";
            noBtn.style.display = "none";
        }
    });
}
