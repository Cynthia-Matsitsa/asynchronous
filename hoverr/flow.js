//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10.
 //Return the array with the new values
 let number = [10,20,30,40,50];
    let newArray = []
 function addMultiply(){
   number.slice(0,4).forEach(a=>{
     newArray.push(a*a)
    }
        )
        number.slice(-2).forEach(a=>{
            newArray.push(a+10)
        })
        return newArray
 }
 addMultiply(newArray)