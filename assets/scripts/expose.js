// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
 
  const hornSelectElement = document.getElementById("horn-select");
  const audio = document.getElementsByClassName(".hidden");
  //when horn-select is changed
  hornSelectElement.addEventListener('change', (event) => {
    //change image
    var sound = hornSelectElement.value; 
    console.log("Horn selected: "+ sound); 
    //ASK TA IF WE CAN ACCESS BY ALT
    var hornIMG = document.querySelector('img[alt="No image selected"]')
    hornIMG.src = 'assets/images/'+sound+'.svg';
    console.log(hornIMG);

    //change audio file
    audio.src = 'assets/audio/'+sound+'.mp3';
    console.log("Audio Element: "+ audio.src);
  });

  //change volume slider
  var volSlider = document.getElementById("volume");
  var volIMG = document.querySelector('img[alt="Volume level 2"]');
  console.log("default audio value: "+ volSlider.value);
  console.log("volume image: "+ volIMG.src);
  volSlider.oninput = function() {
    console.log("audio value: "+ volSlider.value);
    if (1 < volSlider.value && volSlider.value < 33 ){
      volIMG.src = 'assets/icons/volume-level-1.svg';
    }
    if (33 <= volSlider.value && volSlider.value < 67){
      volIMG.src = 'assets/icons/volume-level-2.svg';
    }
    if (67 <= volSlider.value ){
      volIMG.src = 'assets/icons/volume-level-3.svg';
    }
    if (volSlider.value == 0){
      volIMG.src = 'assets/icons/volume-level-0.svg';
    }
    audio.volume = (volSlider.value)/100;
    console.log("Audio volume: "+ audio.volume);
  }
  // play: correct sound
  var playBtn = document.querySelector('button');
  console.log("play button: "+ playBtn);

  playBtn.addEventListener("click", (event) => {
    console.log("play button: "+ playBtn);
    audio.play(); 
  }); 

  // party horn:confetti
}