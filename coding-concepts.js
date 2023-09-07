//ASSESSMENT 1: Coding Conceptual Questions --
// Examine the following examples.
// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.
// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))
// a) Your answer: My prediction is: "tangerine", "magenta", "lilac", "daffodil", "indigo"
// b) Verify and explain: The terminal determined that the correct answer is 5. My prediction was incorrect. This is because "indigo" was added as an additional string via the .push command which changed the amount of strings from 4 to 5.
// --------------------1) What will this log?
const cohort = "LEARN 2023"
console.log(cohort.length)
// a) Your answer: My prediction is: 10.
// b) Verify and explain: The terminal determined that the correct answer is 10. My prediction was correct. This is because .length is requesting for the amount of characters including spaces within the listed string.
// --------------------2) What will this log?
const greeting = "Hello World!"
console.log(greeting[4])
// a) Your answer: My prediction is: "Hello World!" "Hello World!" "Hello World!" "Hello World!"
// b) Verify and explain: The output that my terminal is providing states: "o". I'm not sure why this is the response and my prediction was incorrect - maybe there is an issue with "greeting" being used twice within the function.
// --------------------3) What will this log?
const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])
// a) Your answer:My prediction is: "a"
// b) Verify and explain: The terminal determined that the correct 
answer is "Ruby". My prediction was incorrect because I failed to realize that the values listed are strings - I thought that "a" was the correct answer since I was only looking at "JavaScript" instead of all of the strings that are listed.
// --------------------4) What will this log?
const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())
// a) Your answer:My prediction is: "SATURDAY", "SUNDAY"
// b) Verify and explain: The terminal determined that there is a "TypeError: weekendDays.toUpperCase is not a function". Based on the error given - my prediction was incorrect and I'm not sure why the output didn't match my prediction. Possibly the use of "weekendDays" twice caused the error?
// --------------------5) What will this log?
const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)
// a) Your answer: My prediction is: 39.
// b) Verify and explain: The terminal determined that the correct answer is number. My prediction was incorrrect because my initial thought process was to count the amount of characters including spaces within the array of strings. But the correct output is "number" because it is the first string represented within the function of dataTypes.
8:57




