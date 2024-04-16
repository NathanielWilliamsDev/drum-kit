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

    function removeTransition(event){
        if(event.propertyName !== "transform") return; // Skip if not a trasform (longest one?)
        this.classList.remove("pressed");
    }

    let keys = document.querySelectorAll(".key"); // Array (Node List) of all elements of class .key
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
});