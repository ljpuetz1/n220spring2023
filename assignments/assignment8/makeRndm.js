var random=document.getElementById("random")
var click=document.getElementById("click")

function rndmNum(){
    let randomNum=Math.floor(Math.random()*11);
    return randomNum;
}
function onClick(){
    random.innerHTML=rndmNum();
}