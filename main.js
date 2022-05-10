function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelready);
}

function modelready(){
    Classifier.classify(gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomnumber_r=Math.floor(Math.random()*255)+1;
        randomnumber_g=Math.floor(Math.random()*255)+1;
        randomnumber_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confress").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+randomnumber_r+", "+randomnumber_g+", "+randomnumber_b+")";
        document.getElementById("result_confress").style.color="rgb("+randomnumber_r+", "+randomnumber_g+", "+randomnumber_b+")";

        img_1=document.getElementById("alien-1");
        img_2=document.getElementById("alien-2");
        img_3=document.getElementById("alien-3");
        img_4=document.getElementById("alien-4");

        if(results[0].label=="clap"){
            img_1.src="aliens-01.gif";
            img_2.src="aliens-02.png";
            img_3.src="aliens-03.png";
            img_4.src="aliens-04.png";
        }
        else if(results[0].label=="snap"){   
                img_1.src="aliens-01.png";
                img_2.src="aliens-02.gif";
                img_3.src="aliens-03.png";
                img_4.src="aliens-04.png";
        }
        else if(results[0].label=="bell"){
            img_1.src="aliens-01.png";
            img_2.src="aliens-02.png";
            img_3.src="aliens-03.gif";
            img_4.src="aliens-04.png";
        }
        else{
            img_1.src="aliens-01.png";
            img_2.src="aliens-02.png";
            img_3.src="aliens-03.png";
            img_4.src="aliens-04.gif"; 
        }
    }
}