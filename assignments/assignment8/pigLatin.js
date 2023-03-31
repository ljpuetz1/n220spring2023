//create a variable that grabs the input 
var latin=document.getElementById("latin");
//create a variable that fills in the new word
var newWord=""
//create an array that pulls letters for your vowels
let vowelArray=["a","e","i","o","u","y"];
//create variable that will be filled in by the new word on html doc
var fill=document.getElementById("fill")

//create a function to change the word, start by adding loops that go through the length of the word
function wordChange(){
    for(let j=0;j<latin.value.length;j++){
        for(let i=0;i<6;i++){
            if(latin.value.charAt(j)==vowelArray[i]){
                newWord=latin.value.substring(j)+latin.value.substring(0,j)+"ay";
                break;
            }
        }
    }
    //return gives us the updated word after the pig latin
return newWord
}
//onclick to translate the word and run the function on click 
function onClick(){
    fill.innerHTML=wordChange(fill.value)
    
}
