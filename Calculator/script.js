const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")
const deleteOne = document.getElementById("delete-one")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const equal = document.getElementById("equal")

const display = document.getElementById("display")



one.addEventListener("click", target=>(showCalc(one.textContent)))
two.addEventListener("click", target=>(showCalc(two.textContent)))
three.addEventListener("click", target=>(showCalc(three.textContent)))
four.addEventListener("click", target=>(showCalc(four.textContent)))
five.addEventListener("click", target=>(showCalc(five.textContent)))
six.addEventListener("click", target=>(showCalc(six.textContent)))
seven.addEventListener("click", target=>(showCalc(seven.textContent)))
eight.addEventListener("click", target=>(showCalc(eight.textContent)))
nine.addEventListener("click", target=>(showCalc(nine.textContent)))
zero.addEventListener("click", target=>(showCalc(zero.textContent)))
deleteOne.addEventListener("click", target=>(showCalc(deleteOne.textContent)))
divide.addEventListener("click", target=>(showCalc(divide.textContent)))
multiply.addEventListener("click", target=>(showCalc(multiply.textContent)))
minus.addEventListener("click", target=>(showCalc(minus.textContent)))
plus.addEventListener("click", target=>(showCalc(plus.textContent)))
equal.addEventListener("click", target=>(showCalc(equal.textContent)))

let calc = []
display.textContent = calc

function showCalc(number){

    calc += number
    console.log(calc)
    display.textContent = calc
}

function addNumber(){
    
    display.textContent = calc
}
function subtractNumber(){

    display.textContent = calc
}
function divideNumber(){

    display.textContent = calc
}
function multiplyNumber(){

    display.textContent = calc
}