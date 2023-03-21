let display =  document.getElementById("display")
var displayData

var num1, num2, operation, otherData

const refreshDisplay = () => display.innerHTML = displayData

function userInput(number) {
    if(number == '0' && displayData == '0'){
        display.innerHTML = '0'
    }
    else{
        if(displayData == null || displayData == '0'){
            displayData = number
        }else{
            displayData = displayData + number
            if(num1 != null) {
                if(otherData == null){
                    otherData = number;
                }else{
                    otherData = otherData + number
                }
            }
        }  
    } 
    console.log(displayData)
    refreshDisplay()
}

function clearDisplay() {
    displayData = null
    display.innerHTML = "0"
}

function clearOperation(){
    operation = null
}

function clearData() {
    clearDisplay()
    num1 = 0
    num2 = 0
    clearOperation()
    otherData = null
}

function operationInput(o){
    if(operation == null) {
        num1 = parseFloat(displayData);
        userInput(o);
        operation = o;
        otherData = null
    }
}

function calcDispose(){
    num2 = null
    otherData = null
    clearOperation()
}

function calculate() {
    if(otherData != null){
        num2 = parseFloat(otherData)
        if(operation == '+'){
            num1 = num1 + num2
            displayData = num1
            calcDispose()
        }
        if(operation == '-'){
            num1 = num1 - num2
            displayData = num1
            calcDispose()
        }
        if(operation == '*'){
            num1 = num1 * num2
            displayData = num1
            calcDispose()
        }
        if(operation == '/'){
            num1 = num1 / num2
            displayData = num1
            calcDispose()
        }

        
        refreshDisplay()
    }   
}