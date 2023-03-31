var seven=document.getElementById('seven');
var changed=document.getElementById('update');

function change(num){
    if(num%7==0)
    return true; 
    else return false;
}
function onClick(){
    changed.innerHTML=change(seven.value)
}

