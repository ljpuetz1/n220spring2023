let changeOne =document.getElementById("divOne");
let changeTwo=document.getElementById("divTwo");
let changeThree=document.getElementById("divThree");
let changeFour=document.getElementById("divFour");
let changeFive=document.getElementById("divFive");
let changeSix=document.getElementById("divSix");

let numbers=["divOne","divTwo","divThree","divFour","divFive","divSix"]

let i=0
for(let i=0;i<5;i++){
numbers[0]//divOne
numbers[1]//divTwo
numbers[2]//divThree
numbers[3]//divFour
numbers[4]//divFive
numbers[5]//divSix
}

//first div click
function runClickOne(){
changeOne.body.background("red");
changeTwo.body.background("white");
changeThree.body.background("white");
changeFour.body.background("white");
changeFive.body.background("white");
changeSix.body.background("white");
}
//second div click
function runClickTwo(){
    changeOne.body.background("white");
    changeTwo.body.background("red");
    changeThree.body.background("white");
    changeFour.body.background("white");
    changeFive.body.background("white");
    changeSix.body.background("white");
    }
//third div click
function runClickThree(){
    changeOne.body.background("white");
    changeTwo.body.background("white");
    changeThree.body.background("red");
    changeFour.body.background("white");
    changeFive.body.background("white");
    changeSix.body.background("white");
    }
//fourth div clikc
function runClickFour(){
    changeOne.body.background("white");
    changeTwo.body.background("white");
    changeThree.body.background("white");
    changeFour.body.background("red");
    changeFive.body.background("white");
    changeSix.body.background("white");
    }
//fifth div click
function runClickFive(){
    changeOne.body.background("white");
    changeTwo.body.background("white");
    changeThree.body.background("white");
    changeFour.body.background("white");
    changeFive.body.background("red");
    changeSix.body.background("white");
    }
//sixth div clikc
function runClickSix(){
    changeOne.style.backgroundColor="white";
    changeTwo.style.backgroundColor="white";
    changeThree.body.background("white");
    changeFour.body.background("white");
    changeFive.body.background("white");
    changeSix.body.background("red");
    }









