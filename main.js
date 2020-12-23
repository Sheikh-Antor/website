var sqr = document.querySelectorAll(".square");
var displayColor = document.getElementById('displayColor');
var msg = document.getElementById('msg');
var reset = document.getElementById('reset');
var head = document.getElementById('head');
var hard = document.getElementById('hard');
var easy = document.getElementById('easy');

 var numSqr=6;
var colors = genarateRandomColor(numSqr);
// =pickedRandomColor(colors);
var pickedColor=pickedRandomColor(colors);

displayColor.textContent=pickedColor.toUpperCase()
 
 
for (var i = 0; i < sqr.length; i++) {
    sqr[i].style.backgroundColor = colors[i];

    sqr[i].addEventListener('click', function () {

        var clickColor = this.style.backgroundColor;
         

        // condition statment starts

        if (pickedColor===clickColor) {
            msg.textContent = "Correct";
            reset.textContent="Play Again!"
            macthColor(pickedColor) ;
            msg.style.backgroundColor="green";
            head.style.backgroundColor=pickedColor;

        
           
        } else {
           
            this.style.backgroundColor="transparent";
            msg.textContent = "Try again";
            msg.style.backgroundColor="red";
           
        }

    })

}



function macthColor(color) {
    for (var i = 0; i < sqr.length; i++) {
        sqr[i].style.backgroundColor = color;
    }
}

function pickedRandomColor(colors){
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}




// Colors array Pusing
function genarateRandomColor(num) {

    var colors = [];


    for (var i = 0; i < num; i++) {
        colors.push(randomColor());
    }

    return colors;
}






// randomColors




function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}



 reset.addEventListener('click',function(){
      this.textContent="New Colors";
      displayColor.textContent=pickedColor.toUpperCase()
    colors = genarateRandomColor(numSqr);
    pickedColor=pickedRandomColor(colors);
    displayColor.style.color="white";
    for(var i=0; i<sqr.length; i++){

        sqr[i].style.backgroundColor=colors[i];
       
    }

 })


 



//  easy btn addEventLister
easy.addEventListener('click',function(){
    console.log(colors)
    this.classList.add('selected');
    hard.classList.remove('selected');
    this.style.color="white";
    this.style.fontWeight="bolder";
hard.style.backgroundColor="green";

    displayColor.textContent=pickedColor.toUpperCase();
    numSqr=3;
    colors = genarateRandomColor(numSqr);
    pickedColor=pickedRandomColor(colors);
    displayColor.style.color="white";
    for(var i=0; i<sqr.length; i++){
        if(colors[i]){
            sqr[i].style.backgroundColor=colors[i];
        }else{
            sqr[i].style.display="none";
        }
     
       
    }


})


hard.addEventListener('click',function(){
    this.classList.add('selected');
    easy.classList.remove('selected');
    this.style.color="white";
    this.style.fontWeight="bolder";


    displayColor.textContent=pickedColor.toUpperCase();

    easy.style.backgroundColor="green";

      numSqr=6;

    colors = genarateRandomColor(numSqr);
    pickedColor=pickedRandomColor(colors);
    displayColor.style.color="white";
    for(var i=0; i<sqr.length; i++){
        sqr[i].style.backgroundColor=colors[i];
        sqr[i].style.display="block";
    
    }
})
