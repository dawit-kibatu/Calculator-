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
    division=division.toFixed(5)
    return  division
}

