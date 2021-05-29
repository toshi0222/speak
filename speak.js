// window.onload = function () {
    window.addEventListener('mouseup', e => {
        let selectedStr;
        if (window.getSelection) {
            selectedStr = window.getSelection().toString();
            if (selectedStr !== '' && selectedStr !== '\n') {
                speak(selectedStr);
//                console.log(selectedStr);
            }
        }
    });
// };


function speak(s_text) {
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();

    const uttr = new SpeechSynthesisUtterance();
    uttr.text = s_text;
    uttr.rate = 1;
    uttr.voice = speechSynthesis
        .getVoices()
        .filter(voice => voice.name == 'ja-JP')[0];

    speechSynthesis.speak(uttr);
    uttr.onend = function () {
        // hoge
    };
}