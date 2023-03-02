let changeOne =document.getElementById('divOne');
let changeTwo=document.getElementById('divTwo');
let changeThree=document.getElementById('divThree');
let changeFour=document.getElementById('divFour');
let changeFive=document.getElementById('divFive');
let changeSix=document.getElementById('divSix');

function move(){
    var divMove= document.createElement("div");//creates a new div ;)
    divMove.addEventListener("click",move);
    this.append(divMove);
    this.removeEventListener("click",move);
}


//first div click

    
    changeOne.addEventListener('click',function(move){
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
    })
    changeOne.addEventListener('click',function(move){


    })

    
    


//second div click
changeTwo.addEventListener('click',function(move){
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

})
//third div click
changeThree.addEventListener('click',function(move){
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
})

changeFour.addEventListener('click',function(move){
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
})
changeFive.addEventListener('click',function(move){
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
})
changeSix.addEventListener('click',function(move){
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
})










