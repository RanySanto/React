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



one.addEventListener("click", target=>(appendValue(one.textContent)))
two.addEventListener("click", target=>(appendValue(two.textContent)))
three.addEventListener("click", target=>(appendValue(three.textContent)))
four.addEventListener("click", target=>(appendValue(four.textContent)))
five.addEventListener("click", target=>(appendValue(five.textContent)))
six.addEventListener("click", target=>(appendValue(six.textContent)))
seven.addEventListener("click", target=>(appendValue(seven.textContent)))
eight.addEventListener("click", target=>(appendValue(eight.textContent)))
nine.addEventListener("click", target=>(appendValue(nine.textContent)))
zero.addEventListener("click", target=>(appendValue(zero.textContent)))
deleteOne.addEventListener("click", target=>(appendValue(deleteOne.textContent)))
divide.addEventListener("click", target=>(appendOperation(divide.textContent)))
multiply.addEventListener("click", target=>(appendOperation(multiply.textContent)))
minus.addEventListener("click", target=>(appendOperation(minus.textContent)))
plus.addEventListener("click", target=>(appendOperation(plus.textContent)))
equal.addEventListener("click", ()=>(calculate()))

let prevValue = ""
let operation = ""
let nextValue = ""
let total = ""


function appendValue(number){
    if (operation === ""){
        prevValue += number
        console.log(parseInt(prevValue))
    }   else {
        nextValue += number
        console.log(parseInt(nextValue))
        // value1 operation value2
    }
}

function appendOperation(signal){
    if (operation===""){
        operation += signal
        console.log(signal)
    } else {}
}

function calculate(){
    switch (operation) {
        case "+" :
            total = parseInt(prevValue) + parseInt(nextValue)
            break
        case "-" :
            total = parseInt(prevValue) - parseInt(nextValue)
            break
        case "X" :
            total = parseInt(prevValue) * parseInt(nextValue)
            break
        case "/" :
            total = parseInt(prevValue) / parseInt(nextValue)
            break
        default:
            console.log("Please make a valid expression.")
    }
    console.log(total)
    prevValue = total
    nextValue = ''
    operation = ''
}
