let myArray=["Cooking","Volleyball","Games","Wizards","God Gamer"];
i=0
for(let i=0;i<5;i++){
console.log(i)
console.log(myArray[i])
myArray[0];//Cooking
myArray[1];//Volleyball
myArray[2];//games
myArray[3];//wizards
myArray[4];//god gamer
let newElement=document.createElement("div");
newElement.innerHTML=myArray[i];
document.body.appendChild(newElement);


}