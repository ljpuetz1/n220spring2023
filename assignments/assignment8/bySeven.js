var seven=document.getElementById('seven');
var div=7;
var changed=document.getElementById('update');

function change(num){
    //?
    if(seven.value%7==0)
    return true; 
    else return false;
}
function onClick(){
    change
    changed.innerHTML("True")
    console.log(seven.value%7==0 )

    /*
onClick.document.getElementById('seven')
changed.innerHTML("")
change(seven.value%div);
console.log("you clicked")
*/

}

