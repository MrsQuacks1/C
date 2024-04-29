function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true}); classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EA4nf-WCi/model.json', modelReady); }

function modelReady(){
    classifier.classify(h);
}
function h(error, o){
    if (error) {
        console.log(error);
    } else {
        console.log(o);
        document.getElementById("result_label").innerHTML="La cancion que se escucha es..."+o[0].label;
        document.getElementById["result_confidence"].innerHTML="La precision es de..."+o[0].confidence;
        if(o[0].label=="Ruido de fondo") {
            document.getElementById("Chaeyoung").src="SonChaeyoung.GIF";
            document.getElementById("Mina").src="Mina.jpg";
            document.getElementById("Sana").src="Sanashyshy.jpg";
            document.getElementById("Dahyun").src="Dubu.jpg";
        }
        if(o[0].label=="Moonlight Sunrise") {
            document.getElementById("Chaeyoung").src="Chaeyoung.jpeg";
            document.getElementById("Mina").src="MyioMina.GIF";
            document.getElementById("Sana").src="Sanashyshy.jpg";
            document.getElementById("Dahyun").src="Dubu.jpg";
        }
        if(o[0].label=="I can do with a broken heart") {
            document.getElementById("Chaeyoung").src="Chaeyoung.jpeg";
            document.getElementById("Mina").src="Mina.jpg";
            document.getElementById("Sana").src="MinatozakiSana.GIF";
            document.getElementById("Dahyun").src="Dubu.jpg";
        }
        if(o[0].label=="case 143") {
            document.getElementById("Chaeyoung").src="Chaeyoung.jpeg";
            document.getElementById("Mina").src="Mina.jpg";
            document.getElementById("Sana").src="Sanashyshy.jpg";
            document.getElementById("Dahyun").src="KimDahyun.GIF";
        }
        }
}