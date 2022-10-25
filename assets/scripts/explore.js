// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var smileIMG = document.querySelector('img[alt="Smiling face"]')
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select'); 
  let voices = [];


  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  setInterval(function () {
    if(speechSynthesis.speaking == true){
      smileIMG.src = 'assets/images/smiling-open.png';
    }
    if(speechSynthesis.speaking == false){
      smileIMG.src = 'assets/images/smiling.png';
    }
  }, 10);
  // play speech to text
  var playBtn = document.querySelector('button');
  playBtn.addEventListener("click", (event) => {
    smileIMG.src = 'assets/images/smiling-open.png';
    var inputTxt = document.getElementById("text-to-speak");
    console.log("text area contents: " + inputTxt.value);
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    console.log(speechSynthesis.speaking);
    inputTxt.blur();
  }); 
  
}