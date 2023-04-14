

function answer(event){
    let tellMe=event.target.getAttribute("data-answer")
    console.log("yeah baby i got clicked baby baby yeah.")
    console.log(tellMe)
    let makeDiv= document.createElement("div");{
        makeDiv.id='answerBack';
        makeDiv.style="background-color:#00FF9D;";
        makeDiv.style.height="100px";
        makeDiv.style.width="100px";
        document.body.appendChild(makeDiv);}
    let fineAnswer=document.getElementById('answerBack')
    fineAnswer.innerHTML=tellMe
}