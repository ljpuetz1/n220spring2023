
//create global variable 
let i=0
// have the global variable count up because loop
while (i<=4000){
    console.log("yummycode yum yum I love eating code");
   i= i+1000
   //create the div
   let loop=document.createElement("div");
    // give sizes for the div
    loop.style.width=100;
    loop.style.height=100;
    loop.innerHTML=i
//have the document bring forth the loop
    document.body.appendChild(loop);

}



