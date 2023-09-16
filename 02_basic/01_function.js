
function sayMyName(){
console.log("H");
console.log("H");
console.log("d");
console.log("I");
console.log("G");
}
// sayMyName
// function addTwoNumber (number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumber(3, 5)
// console.log("Result:", result);

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    // return number1 + number2
}    
//     function loginUserMessage(username){
//         if(username === undefined)
//             console.log(("Please Enter a Username")
//         )
//         return`${username} just logged in`
//     }
// // console.log(loginUserMessage("Rizwan"))
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 600))
const user = {
    user: "Rizwan",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.user} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
//     user: "Mulla",
//     price: 400
// })
const newArray = [200, 500, 1000]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(newArray));