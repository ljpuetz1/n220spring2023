let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   for (let i = 0; i < objects.length; i++) {
        let makeDiv = document.createElement("div");
        makeDiv.style.backgroundColor = objects[i].color;
        makeDiv.style.height = objects[i].height + "px";
        makeDiv.style.width = objects[i].width + "px";
        makeDiv.innerHTML="mmh mhh mhh i love lasagna says garfield"
        
        document.body.appendChild(makeDiv);}

   /*
for(i=0;i<3;i++){

    let makeDiv= document.createElement("div");{
        
        makeDiv.style=objects()
        
        makeDiv.innerHTML="its a me Mario"
        document.body.appendChild(makeDiv);}
}
*/