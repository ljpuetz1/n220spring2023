
var numbers=[];

function run(){
inputValue=document.getElementById('valNum').value;
    let splitstring=inputValue.split(",");
    numbers.push(splitstring);
    
    var total=0;
    for(i=0;i<splitstring.length;i++){
        var x= Number(splitstring[i]);

        total+=x;

    }

    document.getElementById('averageNum').innerHTML="The average number:"+total/splitstring.length
    document.getElementById('sum').innerHTML="The sum of values:"+total
    console.log(total);
    console.log(numbers);
}

/*
console.log(numbers);

let myArray=[1,2,3];
var TOTAL = 0;
for (i=0; i<3; i++){
    TOTAL += myArray[i]
    }
    console.log(TOTAL);
    */