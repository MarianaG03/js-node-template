//Traditional way of defining variables
const names = "Mariana";
const course = "Cis 177";
const grade = 93;

// a Traditional way of concatenating strings
const finalGrade =
	names + " is taking " + course + " and  expects to earn " + grade + "%";

console.log(finalGrade); // output: Mariana is taking Cis 177 and expects to earn 93%

// String with backticks
const betterFinalGrade = `${names} is taking ${course} and expects to earn ${grade}%`;
console.log(betterFinalGrade); //output: Mariana is taking Cis 177 and expects to earn 93%
