var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
//agrega esta línea para que reconozca el español
recognition.lang="es-MX";

var Textbox = document.getElementById("textbox");

function start() 
{
    Textbox.innerHTML = "";
    recognition.start();
}


recognition.onresult = function (event)
{
    console.log(event);

    var Content = event.results[0][0].tramscript;
    console.log(Content);

    Textbox.innerHTML = Content;

    if(Content == "Toma mi selfie")
    {
        console.log("tomando selfie ---");
        speak();
    }
}

    function speak(){
        var synth = window.speechSynthesis;

        speak_data ="Tomando tu selfie en 5 segundos";

        var utterThis = new SpeechSynthesisUtterance(speak_data);

        synth.speak(utterThis);

        Webcam.attach(camera);
    }

    camera = document.getElementById("camera");

    Webcam.set({
        width:360,
        height:250,
        image_format:"png",
        png_quality:90
    });