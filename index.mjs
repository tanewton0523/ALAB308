// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//Check if all numbers are divisible by 5, Q1
let answer = [];

answer[1] = n1 / 5;
answer[2] = n2 / 5;
answer[3] = n3 / 5;
answer[4] = n4 / 5;

//Check if the first number is larger than the last, Q2
answer = n1 > n4;

//Subtract 1st number from 2nd, multiply result by 3rd number, divide result by 4th number, Q3
let num = n1 - n2;
num * n3;
num / n4;

//Q4
let isNotOver25 = (num < 25);

//PART 2:

const speeds = [55, 60, 75];
const mpg = [30, 28, 23];
const dist = 1500;
const cost = 3;
const miles = 1500;

checkTrip(mpg[1], speeds[1]);
checkTrip(mpg[2]), speeds[2];
checkTrip(mpg[3], speeds[3]);

//Functions

function checkTrip (mpg, speed)
{
    let gallons = miles / mpg;
    let isInBudget = (gallons * cost) <= miles 
    let tripTime = miles / speed;

    console.log("Gallons: " + gallons);
    console.log("Is in budget: " + isInBudget);
    console.log("Trip Time: " + tripTime + " hours");
}