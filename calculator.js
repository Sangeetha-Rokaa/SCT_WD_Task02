let currentInput='';
let currentOperation='';
let firstNumber=null;

function updateDisplay(){
    const displayElement=document.querySelector('.display');
    if(displayElement){
        displayElement.value=currentInput||'0';
    }
}
function appendNumber(number)
{
    currentInput +=number;
    updateDisplay();
}

function clearDisplay(){
    currentInput='';
    currentOperation='';
    firstNumber=null;
    updateDisplay();
}
function setOperation(operation){
    if(firstNumber===null){
        firstNumber=parseFloat(currentInput);
    }else if(currentInput!==''){
        firstNumber=calculate();
    }
    currentInput='';
    currentOperation=operation;  
}
function calculate(){
    if(firstNumber===null|| currentInput==='')return;
    const secondNumber=parseFloat(currentInput);
    let result;
    switch(currentOperation){
        case'+':
        result=firstNumber+secondNumber;
        break;
        case'-':
        result=firstNumber-secondNumber;
        break;
        case'*':
        result=firstNumber*secondNumber;
        break;
        case'/':
        if(secondNumber===0){
            alert('cannot divide by zero');
            clearDisplay();
            return;
        }
        result=firstNumber/secondNumber;
        break;
        default:
            return;
    }
    currentInput= result.toString();
    currentOperation='';
    firstNumber=null;
    updateDisplay();
    return result;
}
 //function updateDisplay(){
    //document.getElementById('display').value=currentInput;
 //}
