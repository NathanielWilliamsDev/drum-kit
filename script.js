// Event listener for when a key is pressed
// Set 'audio' to the html audio tag which has the data-key matching the event.keyCode
//  - if I press A, the event.keyCode is 65, therefore it selects the audio element that has data-key=65
window.addEventListener("keydown", function(event){
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return; // Pressed a key that has no audio tag, just return
    audio.currentTime = 0; // Lets spamming, resets the audio time when another keydown occurs
    audio.play();
});