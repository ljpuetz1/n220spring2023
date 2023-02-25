function big () {
    document.getElementById("result").style.fontSize = "xx-large";
   
}


function small () {
  var adjustText= document.getElementById("result").style.fontSize = "small";
}



bigger.addEventListener ("click", big);
smaller.addEventListener ("click", small);