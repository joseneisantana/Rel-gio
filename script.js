function updateClok(){
 
    const hoursElement = document.querySelector(".hours")
    const minutsElement = document.querySelector(".minutes")
    const secondsElement = document.querySelector(".seconds")


const now = new Date();
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");
  
 hoursElement.textContent = hours;   
 minutsElement.textContent = minutes;   
 secondsElement.textContent = seconds;   

 
}

updateClok();

setInterval(updateClok, 1000)