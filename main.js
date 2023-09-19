// https://teachablemachine.withgoogle.com/models/alfUlFpzR/




Webcam.set({
    width: 340,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90
});

camera = document.getElementById("camera")
Webcam.attach(camera)



function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });

}


prediction_1 = ""
prediction_2 = ""


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/alfUlFpzR/model.json", modelLoaded)


function modelLoaded() {
    console.log("model has been loaded")


}

function speak() {
    var synth = window.speechSynthesis
    speakdata_1 = "The first prediction is - " + prediction_1
    speakdata_2 = "The second prediction is - " + prediction_2
    var utterthis = new SpeechSynthesisUtterance(speakdata_1 + speakdata_2)
    synth.speak(utterthis)
}


function identify_emotion() {
    speak()
}