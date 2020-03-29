let classifier;
let imageUpload='';
function preload() {
if(imageUpload == ''){
      
}
else{  
  classifier = ml5.imageClassifier('MobileNet',()=>{
       console.log('Got')
  classifier.predict(eximage,(error,result)=>{
    if(error){
          console.log(error)
          }
          else{
            write = document.getElementById('output')
            write.innerHTML = 'MODEL PREDICTS <b>'+ result[0].label.toUpperCase() + '</b> WITH CONFIDENCE OF <b>' + result[0].confidence + '</b>'

          }
      })

  });
 
}
}
function setup(){
    createCanvas(480,480)
    background(0)
    
} 
function gotFile(event){
    var img = URL.createObjectURL(event.target.files[0]);
    eximage = createImg(img,()=>{
        image(eximage,0,0,height,width)
    })
    eximage.hide()
    console.log(eximage)
    imageUpload = eximage;
    preload()   
}
function draw(){


}