function add(...numbers){
    let arr=numbers;
    let sum=arr.reduce((total,inital)=>{
        return total+inital;
    },0)
    return sum;
}
function multiplie(...numbers){
    let arr=numbers;
    let product=arr.reduce((total,inital)=>{
        return total*inital;
    },1)
    return product;
}

function subtract(...numbers){
    let arr=numbers;
    let difference=arr[0];
    for(let i=1;i<arr.length;i++){
        difference-=arr[i]
    }
    return  difference
}
function divide(...numbers){
    let arr=numbers;
    let division=arr[0];
    for(let i=1;i<arr.length;i++){
        division=division/arr[i]
    }
    division=Number(division.toFixed(5))
    return  division
}
const screen=document.querySelector(".screen");
const numberButtons=document.querySelectorAll(".numbers")
numberButtons.forEach(button=>{
    button.addEventListener("click",handleClick)
})
function handleClick(event){
    screen.textContent+=event.target.textContent
}
const delButton=document.querySelector("#delete");
delButton.addEventListener("click",deleteNumber)
function deleteNumber(){
    screen.textContent=screen.textContent.slice(0,-1);
}
const cancelButton=document.querySelector("#cancel")
cancelButton.addEventListener("click",clear)
function clear(){
    screen.textContent=""
}
const operatorButtons=document.querySelectorAll(".operators");
operatorButtons.forEach(button=>{
    button.addEventListener("click",print)
})
function print(event){
    screen.textContent+=event.target.id
}
const equalsButtons=document.querySelector("#equals");
equalsButtons.addEventListener("click",equals);
let numbers=[]
let operators=[]
let currentNumber=''
function equals(){
    numbers=[]
    operators=[]
    let result=0
    console.log(parseFloat(screen.textContent))
   for (let char of screen.textContent) {
        if ('+-×÷'.includes(char)) {
            if (currentNumber !== '') {
                numbers.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            operators.push(char);
        } else {
            currentNumber += char;
        }
    }
    if (currentNumber !== '') {
        numbers.push(parseFloat(currentNumber));
    }
    while(numbers.length>1){
        while(true){
            if(operators.includes("×")==false){
                break;
            }
            console.log("m")
            if(operators.includes("×")){
            let position=operators.indexOf("×")
            result=multiplie(numbers[position],numbers[position+1])
            operators.splice(position,1)
            numbers.splice(position,1)
            numbers.splice(position,1)
            numbers.splice(position, 0, result);
            console.log(numbers)
            console.log(operators)
            
    }
        }
       while(true){
           if(operators.includes("÷")==false){
                break;
            }
            console.log("d")
            if(operators.includes("÷")){
            let position=operators.indexOf("÷")
            result=divide(numbers[position],numbers[position+1])
            operators.splice(position,1)
            numbers.splice(position,1)
            numbers.splice(position,1)
            numbers.splice(position, 0, result);
            console.log(numbers)
            console.log(operators)}
            
    }
        while(true){
            if(operators.includes("+")==false){
                break;
            }
           console.log("a")
            if(operators.includes("+")){
            let position=operators.indexOf("+")
            result=add(numbers[position],numbers[position+1])
            operators.splice(position,1)
            numbers.splice(position,1)
            numbers.splice(position,1)
            numbers.splice(position, 0, result);
            console.log(numbers)
            console.log(operators)
            
    }
        }
        while(true){
            if(operators.includes("-")==false){
                break;
            }
          console.log("s")
            if(operators.includes("-")){
            let position=operators.indexOf("-")
            result=subtract(numbers[position],numbers[position+1])
            operators.splice(position,1)
            numbers.splice(position,1)
            numbers.splice(position,1)
            numbers.splice(position, 0, result);
            console.log(numbers)
            console.log(operators)
            
    }
        }
    }
    screen.textContent=result
}