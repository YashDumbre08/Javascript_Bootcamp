// const cowsay = require("cowsay");
// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "OO",

// const a=5;
// console.log("The value of a is " +a);
// console.log(`The value of a is also ${a}`);

// function greet(name,age)
// {
//     let message = `Hello, ${name}! You are ${age} years old`;
//     return message;
// }
// const greeting = greet("Yash",20);
// console.log(greeting);

// let counter = 0;
// while(counter<3)
// {
//     console.log(`Loop iteration: ${counter}`);
//     counter = counter +1;
// }
// console.log("While loop finished");

// const fruits = ["Apple","Banana","Orange","Mango"];
// for (let i = 0;i<fruits.length;i++)
// {
//     const fruit = fruits[i];
//     console.log(`Fruits at index ${i} is: ${fruit}`);
// }

// let temperature = 11;
// if (temperature>30)
// {
//     console.log("It's a hot day!");
// }
// else if (temperature>20)
// {
//     console.log("It's a pleasant day.");
// }
// else
// {
//     console.log("It's a bit chilly today.");
// }

// function calculateArea(length,width=1)
// {
//     return length*width;
// }

// function calculateAreas(length)
// {
//     return length*length;
// }
// const rectangleArea = calculateArea(10,5);
// console.log(`Area of a 10x5 rectangle is: ${rectangleArea}`);

// const squareArea = calculateAreas(8);
// console.log(`Area of a square with side 8(using default width) is: ${squareArea}`);

// for(initial condition; limit condition; increment)
// {
//     do stuff;
// }

// for(let i = 2;i<=11; i=i+3)
// {
//     console.log(3);
// }

// const getSum = function(a,b) {return a+b;};
// const sum = getSum(15,20);
// console.log(`The sum of 15 and 20 is:${sum}`);

// const multiply = (x,y)=> x*y;
// console.log(`The product of 5 and 6 is: ${multiply(5,6)}`);
// function mult(x,y)
// {
//     const c=x*y;
//     return c;
// }

// let sum=0;
// for( let i=1; i<1000; i++)
// {
//     if(i%3==0||i%5==0)
//     {
//         sum=sum+i;
//     }
// }
// console.log(`The sum of all numbers below 1000 that are divisible by 3 and 5 is: ${sum}`);

// a = 1
// b = 2
// total_sum = 0

// while b < 4000000:
//     if b % 2 == 0:
//         total_sum += b
//     a, b = b, a + b

// print(total_sum)


// Find the sum of all even Fibonacci numbers under 4000000:
// a=1;
// b=2;
// let sum=0;
// while (b<4000000)
// {
//     if (b%2==0)
//         {
//             sum = sum + b;
           
//         }
//     let next = a+b;
//     a=b;
//     b=next;  
// }
// console.log(sum);


// let number = 600851475143;
// let factor = 2;
// let largest = 0;
// while (number>1)
// {
//     if(number%factor==0)
//     {
//         number=number/factor;
//         largest=factor;
//     }
//     else
//     {
//         factor=factor+1;
//     }
// }
// console.log("Largest prime factor of 600851475143 is",largest);


// let factorial=1n;
// let sum = 0n;
// let lastdigit = 0n;
// let number = 100n;
// for(i=1n;i<=number;i++)
// {
//     factorial=factorial*i;
// }

// while (factorial>0)
// {
//     lastdigit = factorial%10n;
//     sum = sum+lastdigit;
//     factorial = factorial/10n;
// }

// console.log(`Sum of digits of factorial is ${BigInt(sum)}`);


//Pandigital number
// a = "256";
// b = parseInt(a);
// console.log(b);

// const c = ["2","5","6"];
// d= c.join();




// json FORMAT:
// const myObject = 
// {
//     "name":"Yash",
//     "age":25,
//     "isStudent":true,
//     "hobbies":["reading","coding"],
//     "address":{
//         "city":"Newyork",
//         "zipcode":"10001"
//     }
// }
// console.log(`Name: ${myObject.name}`);
// console.log(`First hobby: ${myObject.hobbies[0]}`);
// console.log(`Zipcode: ${myObject.address.zipcode}`);



// const arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }
// const tripled = arr.map((n) => n * 3);
// const divisibleBy5 = tripled.filter((n) => n % 5 === 0);
// const sum = divisibleBy5.reduce((acc, curr) => acc + curr, 0);
// console.log(tripled);
// console.log(divisibleBy5);            
// console.log(sum);   


// a=[2,3,4,5,6]
// for(i=1;i<100;i++)a.push(i)
// a.map(x>=x%5==0).reduce((a,x)=>a+x)
// function abc(x){return x*3}

// const a = [2, 3, 4, 5, 6];
// for (let i = 1; i <= 100; i++) {
//   a.push(i);
// }

// const abc = x => x * 3;

// const sum = a
//   .map(abc)
//   .filter(x => x % 5 === 0)
//   .reduce((acc, x) => acc + x, 0);

// console.log('Sum of triples divisible by 5 =', sum);


a = [3,4,-5,-6,7]
//Sum of all positive numbers in array
console.log(a.reduce((a,x)=>{
    if(x>0)
    {
        return a+x;
    }
    else{
        return a;
    }
}))

//To find average age of everyone
// sum = 0;
// let avg=0;
// const users = [
//     {name:'Alice',age:25},
//     {name:'Bob',age:30},
//     {name:'Charlie',age:25}
// ];
// for(let i=0; i<users.length; i++)
// {
//     sum = sum + users[i].age;
// }
// avg = sum/users.length;
// console.log(avg);

