// let object={
//     name:"hamza"
//     ,age:10
//     ,grad:"2nd"
// }
// console.log(object.name)


let x= Number (prompt("Enter Your First Number,please")) 


let y= Number (prompt("Enter Your Second Number,please")) 


let w=  prompt("Enter Your Operation,please")

switch(w){

case"/": document.write(x/y)

break;

case"x": document.write(x*y) 



break;

case"-": document.write(x-y)

break;

case"+": document.write(x+y)

break;

case"*":document.write(x*y) 

break;

case"%": document.write(x/y)

break;



default: 
         document.write("YOU HAVE AN ERROR IN YOUR CALCULATIONS")



}


