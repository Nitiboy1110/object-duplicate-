img = "";
object = [];
status = "";

    function preload(){
        img = loadImage('ok.png');
    }

    function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    Object_Detection = ml5.objectDetector('cocossd', ModelLoaded);
    document.getElementById("statuus").innerHTML = "status: Detecting Objects...";
    }

    function ModelLoaded(){
        console.log("Model is not Loaded");
        status = true;
        Object_Detection.detect(img, GotResults);
    }
    
    function draw(){
        image(img,0,0,640,420);
        if(status !=""){
        
            for(i = 0; i < object.length; i++){
        document.getElementById("statuus").innerHTML = "Object Detected";
        fill("#FFC000");
        percent = floor(object[i].confidence * 100);
        text(object[i].label + " " + percent + "%",object[i].x + 15 , object[i].y +15) ;
        noFill();
        stroke("#FF0000");
        rect(object[i].x - 70,object[i].y-50,object[i].width,object[i].height) ;
            }
        }
    }

    function GotResults(error, results ){
        if(error){
            console.log(error);
            console.log("eeeeeeerrrrrrrrrrroooooorrrrrrr beeb beep beep");
        }
            console.log(results);
            object  = results;
    }