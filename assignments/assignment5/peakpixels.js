//create a variable for the height and width to make easier to change them later
var x=100
//create an object for the div


let bigDiv= document.createElement("div");{
    bigDiv.id='beBigDiv'
    bigDiv.style="background-color:green;";
    bigDiv.style.height=x+"px";
    bigDiv.style.width=x+"px"
    document.body.appendChild(bigDiv);

}
var beBigDiv=document.getElementById('beBigDiv');
beBigDiv.style.cursor='pointer'
beBigDiv.onclick=function(){
    bigDiv.onclick(x=x*1.1);
}


    



