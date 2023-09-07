//ASSESSMENT 1: Coding Practical Questions
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process
// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js
// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.
// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"
// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"
// Pseudo code:
// name of function: fruity
// input: 2 set of strings - (apple, banana) (cherry, kiwi)
// output: 2 strings - banana and cherry
// process: (string method) assess all of the variables and filter the strings from each set that has more characters.
// const fruit1 = "apple"
// const fruit2 = "banana"
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// if (fruit1.length > fruit2.length){
//     console.log(`${fruit1} has more letters`)
// } else if (fruit1.length < fruit2.length) {
//     console.log(`${fruit2} has more letters`)
// } else {
//     console.log("They have the same letters")}
const fruity = ("apple", "banana", "cherry", "kiwi") => {
    return (fruity.length())
}
// NOTES: The terminal is stating that I have a syntax error and I'm not sure where I've messed up.
// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
// const temperature1 = 42
// // Expected output: "42 is below boiling point"
// const temperature2 = 350
// // Expected output: "350 is above boiling point"
// const temperature3 = 212
// // Expected output: "212 is at boiling point"
// Pseudo code:
// name of function: hotAndCold
// input: numbers that represent tempuratures
// output: adding the description of whether the tempuratures are either @boiling, above boiling, or below boiling to each numerical tempurture
// process: "if" conditional statement, assigning descriptions to specific variables
// const temps = [42, 350, 212]
// if (temps === 212) {
//     console.log("212 is at boiling point.")
// }
const hotAndCold = (tempurature) => {
    if (tempurature >= 212){
        return "is at boiling point."
}
else if (tempurature >= 350){
    return "is above boiling point."
}
else if (tempurature <= 42){
    return "is below boiling point."
}
else {
    return "error"
    }
}
console.log(hotAndCold(42))
console.log(hotAndCold(212))
console.log(hotAndCold(350))
// NOTES: The terminal is stating "ReferenceError: cannot access 'array' before initialization" - I'm not sure what I've done wrong - to generate the outputs I first tried "tempurature" instead of "hotAndCold" within the console.log but that also did not work.
// // --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.
// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9
// Pseudo code:
// name of function: competitions
// input: 2 arrays of numbers
// output: the amount of variables within both arrays combined
// process: combine values within arrays and return the amount of characters of the combined values
// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// const competitions = padres1984WorldSeriesRuns.concat.(padres1998WorldSeriesRuns){
// }
// console.log(competitions.length)
// competitions.length
var padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
var padres1998WorldSeriesRuns = [6, 3, 5, 3]
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
    let array = [array.length]
//NOTES: I keep getting an error message, I think I'm on the right track but there's probably a lot wrong with my syntax?
// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.
// const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"
// Pseudo code:
// name of function: currentCohort
// input: 1 string
// output: string written backwards
// process: to seperate the string into seperate letters and then reverse the characters to create a version of the string that is written backwards.
// const currentCohort = "Foxtrot 2023"
// const reversedString = str.split(""){
// }
//     console.log(reversedString)
var currentCohort = "Foxtrot 2023"
console.log(currentCohort.split("").reverse)
// NOTES: I'm not sure why the command .reverse isn't working. Again - most likely syntax issue? I thought that the command split and reverse would generate the correct output.
// // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.
// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// // Expected output: 7
// const givenValue2 = 10
// Expected output: 8
// Pseudo code:
// name of function: connects
// input: numerical values within array
// output: the last index of the value of the array
// process: using lastIndexOf to assess values from the array and determine which one aligns with the last index placement
const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]
for (let i = 0; i < numberOfConnections.length; i++) {
console.log("index", i)
console.log("value", numsArray [i])
}
// NOTES: In line 166 - I initially had "i < 9" since there are 9 values in the array - but that also didn't work. The terminal says I have a syntax issue again.
// IN CONCLUSION: None of my responses created the correct output and I need to reach out for help.
8:56
// 



