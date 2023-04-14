/*
function changeColor(event){
    let red=50;
    let blue=50;
    let green=50;
    let tell=event.target.getAttribute("data-number")
    let makeDiv= document.createElement("div");{
        makeDiv.id='colorBlock';
        makeDiv.style.backgroundColor=50,50,50;
        makeDiv.style.height="100px";
        makeDiv.style.width="100px";
        document.body.appendChild(makeDiv);}

    
console.log(makeDiv.backgroundColor);
}
*/
let colorChanger=document.getElementById('colorMixer')
    let red=50
    let blue=50
    let green=50

function colorMixer(event) {
    
    
    let tellRed = event.target.getAttribute("data-number");
    tellRed=Number(tellRed);

    let tellBlue = event.target.getAttribute("data-answer");
    tellBlue=Number(tellBlue);
    
    let tellGreen = event.target.getAttribute("data-response");
    tellGreen=Number(tellGreen);

    let newBlue=blue+tellBlue
    let newGreen=green+tellGreen
    let newRed=red+tellRed
    colorChanger.style.backgroundColor=`rgb(${newRed},${newGreen},${newBlue})`;

    console.log(newRed);
    console.log(newBlue);
    console.log(newGreen);
    console.log(colorChanger.style.backgroundColor)

    
    }


    /*
function changeBlue(event){
    let tell = event.target.getAttribute("data-number");
    console.log("blue:"+tell);
}
function changeGreen(event){
    let tell = event.target.getAttribute("data-number");
    console.log("green"+tell);
}
function colorChange(){

}



let makeDiv = document.createElement("div");{
    makeDiv.id = "colorBlock";
    makeDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    makeDiv.style.height = "100px";
    makeDiv.style.width = "100px";
    document.body.appendChild(makeDiv);
  }
  */