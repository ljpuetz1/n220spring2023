function checkResponse(time){
    if (time=='morning') {
        document.getElementById('dayTime').innerHTML="That is correct";
        console.log("it works")
    }
    if(time=='afternoon'||time=='evening') {
        document.getElementById('dayTime').innerHTML="guess again";
        console.log("guess again")
    }
}