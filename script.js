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
let result = 0;
let answer=result
function equals() {
    numbers = [];
    operators = [];
    currentNumber = '';

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
    
    console.log("Numbers:", numbers);
    console.log("Operators:", operators);

    let i = 0;
    while (i < operators.length) {
        if (operators[i] === '×' || operators[i] === '÷') {
            let num1 = numbers[i];
            let num2 = numbers[i + 1];
            let operationResult;
            
            if (operators[i] === '×') {
                operationResult = multiplie(num1, num2);
            } else {
                operationResult = divide(num1, num2);
            }
            
            numbers.splice(i, 2, operationResult);
            operators.splice(i, 1);
        } else {
            i++;
        }
    }
    
    console.log("After ×÷:", numbers);
    console.log("After ×÷:", operators);

    while (operators.length > 0) {
        let num1 = numbers[0];
        let num2 = numbers[1];
        let operationResult;
        
        if (operators[0] === '+') {
            operationResult = add(num1, num2);
        } else {
            operationResult = subtract(num1, num2);
        }
        
        numbers.splice(0, 2, operationResult);
        operators.splice(0, 1);
    }
    
    result = numbers[0];

    if(Number.isNaN(result)){
        screen.textContent="Syntax Error"
    }
    else{
        screen.textContent=result
        answer=result;
    }
    currentNumber = ''; 
}
const dot=document.querySelector("#dot")
dot.addEventListener(("click"), decimalPoint)
function decimalPoint(event){
    screen.textContent+="."
}
const answerButton=document.querySelector("#answer")
answerButton.addEventListener(("click"),printAnswer)
function printAnswer(){
    screen.textContent=answer
}
