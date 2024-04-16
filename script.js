// Event listener for when a key is pressed
// Set 'audio' to the html audio tag which has the data-key matching the event.keyCode
//  - if I press A, the event.keyCode is 65, therefore it selects the audio element that has data-key=65
window.addEventListener("keydown", function(event){
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // assigning the key to a variable
    if(!audio) return; // Pressed a key that has no audio tag, just return
    audio.currentTime = 0; // Lets spamming, resets the audio time when another keydown occurs
    audio.play();
    
    key.classList.add("pressed"); // Give the pressed key the class "pressed"

    function removeTransition(event){ // removes the "pressed" class after sound is executed
        if(event.propertyName !== "transform") return; // Skip if not a trasform (longest one?)
        this.classList.remove("pressed");
    }

    let keys = document.querySelectorAll(".key"); // Array (Node List) of all elements of class .key
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
});

/* 
The transition sticks when a key is pressed for too long (2-3 seconds),
    Below is a fix for this.

function handleKeyEvent(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // assigning the key to a variable
    if(!audio) return; // Pressed a key that has no audio tag, just return
    audio.currentTime = 0; // Lets spamming, resets the audio time when another keydown occurs
    audio.play();
    
    if (e.type === 'keydown') {
        key.classList.add("pressed");
    } else if (e.type === 'keyup') {
        key.classList.remove("pressed");
    }

    
}

window.addEventListener("keydown", handleKeyEvent);
window.addEventListener("keyup", handleKeyEvent);
*/