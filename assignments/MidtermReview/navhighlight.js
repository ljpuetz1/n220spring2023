let changeOne =document.getElementById('divOne');
let changeTwo=document.getElementById('divTwo');
let changeThree=document.getElementById('divThree');
let changeFour=document.getElementById('divFour');
let changeFive=document.getElementById('divFive');
let changeSix=document.getElementById('divSix');
let clickedText=document.getElementById('selectedItem');
    function move(){
     var divMove= document.createElement("div");//creates a new div ;)
     divMove.addEventListener("click",move);
     this.append(divMove);
        this.removeEventListener("click",move);
}
//first div click
    changeOne.addEventListener('click',function(){
        let divOne= document.getElementById('divOne');
        divOne.style.background="red";
        let divTwo= document.getElementById('divTwo');
        divTwo.style.background="white";
        let divThree= document.getElementById('divThree');
        divThree.style.background="white";
        let divFour= document.getElementById('divFour');
        divFour.style.background="white";
        let divFive= document.getElementById('divFive');
        divFive.style.background="white";
        let divSix= document.getElementById('divSix');
        divSix.style.background="white";
        clickedText.innerHTML=divOne.innerHTML;
    })
//second div click
changeTwo.addEventListener('click',function(){
    let divOne= document.getElementById('divOne');
    divOne.style.background="white";
    let divTwo= document.getElementById('divTwo');
    divTwo.style.background="red";
    let divThree= document.getElementById('divThree');
    divThree.style.background="white";
    let divFour= document.getElementById('divFour');
    divFour.style.background="white";
    let divFive= document.getElementById('divFive');
    divFive.style.background="white";
    let divSix= document.getElementById('divSix');
    divSix.style.background="white";
    clickedText.innerHTML=divTwo.innerHTML;
})
//third div click
changeThree.addEventListener('click',function(){
    let divOne= document.getElementById('divOne');
    divOne.style.background="white";
    let divTwo= document.getElementById('divTwo');
    divTwo.style.background="white";
    let divThree= document.getElementById('divThree');
    divThree.style.background="red";
    let divFour= document.getElementById('divFour');
    divFour.style.background="white";
    let divFive= document.getElementById('divFive');
    divFive.style.background="white";
    let divSix= document.getElementById('divSix');
    divSix.style.background="white";
    clickedText.innerHTML=divThree.innerHTML;
})
changeFour.addEventListener('click',function(){
    let divOne= document.getElementById('divOne');
    divOne.style.background="white";
    let divTwo= document.getElementById('divTwo');
    divTwo.style.background="white";
    let divThree= document.getElementById('divThree');
    divThree.style.background="white";
    let divFour= document.getElementById('divFour');
    divFour.style.background="red";
    let divFive= document.getElementById('divFive');
    divFive.style.background="white";
    let divSix= document.getElementById('divSix');
    divSix.style.background="white";
    clickedText.innerHTML=divFour.innerHTML;
})
changeFive.addEventListener('click',function(){
    let divOne= document.getElementById('divOne');
    divOne.style.background="white";
    let divTwo= document.getElementById('divTwo');
    divTwo.style.background="white";
    let divThree= document.getElementById('divThree');
    divThree.style.background="white";
    let divFour= document.getElementById('divFour');
    divFour.style.background="white";
    let divFive= document.getElementById('divFive');
    divFive.style.background="red";
    let divSix= document.getElementById('divSix');
    divSix.style.background="white";
    clickedText.innerHTML=divFive.innerHTML;
})
changeSix.addEventListener('click',function(){
    let divOne= document.getElementById('divOne');
    divOne.style.background="white";
    let divTwo= document.getElementById('divTwo');
    divTwo.style.background="white";
    let divThree= document.getElementById('divThree');
    divThree.style.background="white";
    let divFour= document.getElementById('divFour');
    divFour.style.background="white";
    let divFive= document.getElementById('divFive');
    divFive.style.background="white";
    let divSix= document.getElementById('divSix');
    divSix.style.background="red";
    clickedText.innerHTML=divSix.innerHTML;
})










