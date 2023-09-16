for (let i = 0; i <= 10; i++) {
    const element = i;
    // if (element == 5){
    // console.log("Go to hell");
    }
    // console.log(element);
    

// console.log(element);    
for (let i = 2; i <= 20; i++) {
    // console.log(`outer Loop: ${i}`);
    for (let j = 1 ; j <=10; j++) {
        // console.log(`Inner loop: ${j} and inner loop value: ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}
let myArry= ["Rizwan", "Ahsan", "Hunain"]
// console.log(myArry.length);
for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    // console.log(element);
    
}



// for (let i = 0; i < 20; i++) {
//     if (i == 5) {
//         console.log("Kaam Pura Niklo Nura");
//         break
//     }
//     console.log(`value of i is: ${i}`);
// }

for (let i = 0; i < 20; i++) {
    if (i == 5) {
        // console.log("Kaam Pura Niklo Nura");
        continue
    }
    // console.log(`value of i is: ${i}`); 
}

let index =0
while (index <= 20) {
    // console.log(`value of index is: ${index}`);
    index = index + 2
    
}
let myArray = ["Ahsan", "Rizwan", "Faizan"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`value of myArray is : ${myArray[arr]}`);
    arr = arr+1
}
let score = 11

do {
    // console.log(`score is: ${score}`);
    score++
}
while (score<=10);
// const array = [1, 2, 3, 4, 5]

// for (const num of array) {
    // console.log(num);        
// }
const greetings = ["Abid", "Kashif", "Subhan"]

for (const greet of greetings) {
    //  console.log(`Each Greeting person is ${greet}`);        
}

// Map
const map = new Map()
map.set('In', "India")
map.set('Pk', "Pakistan")
map.set('Pk', "Pakistan")
map.set('Pk', "Pakistan")
map.set('Pk', "Pakistan")
map.set('JP', "Japan")
// console.log(map);
for (const key in map) {
  console.log(key);
//  console.log(key, ":-", value);
        
    }
// }
// }

const myObject = {
    JV: "JavaScript",
    CPP: "C++",
    Rb: "Ruby",
    C: "C Sharp"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);      
}

const programming = ["JV", "C#", "RB", "Py"]
for (const key in programming) {
    // console.log(programming[key]);
    
}