
  // For Loop

  for (let i = 1; i <= 10; i++) {
    console.log(`For Loop Count: ${i}`);
}

//Let Loop starts with i = 1 which is the start value. The While loop starts with count = 1 which is the start value.

//For loop start value,condition and increment are all in one line. While loop has the start value and increment in separate lines Which takes u more space. 



//While Loop
let count = 1; // Start value

while (count <= 10) {
    console.log(`While Loop Count: ${count}`);
    count++; // Increment to avoid infinite loop
}

//Array of Fav Movies 
const favoriteMovies = [
    "Harry Potter",
    "Twilight",
    "Mortal Instruments", 
    "The Hunger Games",
    "Avatar",
];
//The array of favorite movies is an array of five strings.

//For Loop to iterate through MOVIES!
for (let i = 0; i < favoriteMovies.length; i++) {
    console.log(`${i + 1}. ${favoriteMovies[i]}`);
}

//  The loop runs while `i < favoriteMovies.length`, ensuring all items are processed.
// The loop starts with i = 0 of the first item in the array.
// the loop runs while i < favoriteMovies.length, which is 5.
// The loop increments i by 1 each time it runs.