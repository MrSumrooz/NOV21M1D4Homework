/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */



let area = function(l1,l2){

   let sum = l1 + l2

return sum
}

let output = area (10 ,12)
console.log(output)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */


let crazySum = function(int1,int2){

let result = int1 + int2

    if (int1 === int2){

        console.log(result*3)

    }else{
        console.log(result)
    }

}


crazySum(10,12)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

const fixNum = 19;

const crazyDiff = function(int1,fixNum){

            result = int1 - fixNum

            if (result >19){

                console.log(result*3)
            }

}

crazySum(100,fixNum)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */


let boundary = function(n){

if( (n >= 20  && n <= 100) || n === 400 ){

    console.log(true)
}
else{
    console.log("Value is less than 20 :- ")
}
} 


boundary(8)


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

let strivestring = "Striveschool is best for learning "

let strivify = function(strive){

    let striveindex = strivestring.indexOf("Strive")
    console.log(`'Strive' starts at index ` + striveindex)

    let extractedName = strivestring.slice(striveindex, striveindex + 7)
    console.log(extractedName)



if (strive === striveindex[0]){
    console.log(extractedName)

}else{
    console.log(strive+ " "+strivestring)
}

}

strivify("Strive")

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

let check3and7 = function(int){

    if (int % 3 == 0  ){

        console.log(" Multiplyer of 3")
    }
    else if(int % 7 == 0){
        console.log(" Multiplyer of 7")

    }
    else{
        console.log(" Multiplyer of None")

    }




}
check3and7(22)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

