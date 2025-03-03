
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

//  while i < favoriteMovies.length, which is 5.

//The DoomsMatch Array

//Player Array includes Name, Kills, and Deaths
const players = [
    { name: "Alex", kills: 30, deaths: 5 },
    { name: "Jordan", kills: 25, deaths: 10 },
    { name: "Taylor", kills: 20, deaths: 4 }
  ];
  
  // Initialize best player variables
  let bestPlayer = players[0];
  let bestKDRatio = (bestPlayer.kills / Math.max(1, bestPlayer.deaths)).toFixed(2);

  //to.fixed(2) means to round to 2 decimal places
  //Math.max(1, bestPlayer.deaths) ensures that the denominator is at least 1 to avoid division by zero
  
  // Loop through players and calculate their K/D ratio
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const kdRatio = (player.kills / Math.max(1, player.deaths)).toFixed(2);

    //Grabs players in order player(current Player) calculates the K/D ratio by dividing the player's kills by the maximum of 1 and the player's deaths.
    //The result is rounded to 2 decimal places using toFixed(2).
  
    console.log(`${player.name}: ${player.kills} kills, ${player.deaths} deaths, K/D ratio: ${kdRatio}`);
  //The console.log statement displays the player's name, kills, deaths, and K/D ratio.


    // Check if the current player has the best K/D ratio
    if (kdRatio > bestKDRatio) { 
      bestPlayer = player;
      bestKDRatio = kdRatio;
    }
  }
  
  // Display the best player and their K/D ratio
  console.log(`\nBest Player: ${bestPlayer.name} with a K/D Ratio of ${bestKDRatio}`);
  

  //Bonus Extra Credit

// Constants (values that do not change)
const DAMAGE_MIN = 5;
const DAMAGE_MAX = 25;
const HEAL_MIN = 10;
const HEAL_MAX = 20;
const DODGE_CHANCE = 0.2; // 20% chance to dodge
const HEAL_CHANCE = 0.3;  // 30% chance to heal


  //Player Stats
  let health = 100;
  let totalDamageTaken = 0;
  let totalHeals = 0;
  let totalDodges = 0;
  let rounds = 0;

  console.log("Let the battle begin!");//Display text that battle is starting

  //WHile Loop to simulate the battle
  while (health > 0) {
    rounds++;
    //Playes percent chance to dodge
    if (Math.random() < DODGE_CHANCE) {
      totalDodges++;
      console.log(`Round ${rounds}Player dodged the attack!`);
    } else{
        //Player takes damage if they don't dodge
        let damage = Math.floor(Math.random()*(DAMAGE_MAX - DAMAGE_MIN + 1) + DAMAGE_MIN);
        health -= damage;
        totalDamageTaken += damage;
        console.log(`Round ${rounds}Player took ${damage} damage!`);
        // Damage is = 5-25+1+5 = 26 which is subtracted from the player's health. Console the displays the damage taken and round number.
    }
//Player has a chance to heal
if (health > 0 && Math.random() < HEAL_CHANCE) {
    let heal = Math.floor(Math.random() * (HEAL_MAX - HEAL_MIN + 1)) + HEAL_MIN;
    health += heal;
    totalHeals++;
    console.log(`Player healed for ${heal} HP. New health: ${health}`);
    //USES && to check if BOTH conditions are true! 
    // Player heals for a random amount between 10 and 20. The heal amount is added to the player's health. The console displays the heal amount and the player's new health.
}
  }