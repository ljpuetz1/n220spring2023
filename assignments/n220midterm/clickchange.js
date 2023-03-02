var x="mystery"
let count = 0;
//create an object for the div


let button= document.createElement("button");{
    button.id='changeButton'
    button.style.height="50px";
    button.style.width="75px";
    document.body.appendChild(button);

}

var changeButton=document.getElementById('changeButton');
changeButton.innerHTML="mystery"
changeButton.style.cursor='pointer'
changeButton.onclick=function(){
    count = count + 1;

    if(count > 3) {
        //change inner text
        changeButton.innerHTML = "NEW TEXT"
    }
   // changeButton.onclick(this.innerHTML="reveal");

}