let inputValue=document.getElementById('inputField')
let badWords=["clear","water","tires"];
function childSafety(){
    let splitWord=inputValue.split(" ");
    numbers.push(splitWord);
    let count=0;
    for(let i=0;i<words.length;i++){
        if(badWords.includes(words[i])){
            count++;
        }
    }
console.log(count)
}
