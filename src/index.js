const players = [
	{ name: 'DoomGuy', kills: 25, deaths: 5 },
	{ name: 'Slayer', kills: 18, deaths: 7 },
	{ name: 'Marine', kills: 12, deaths: 12 },
  ]
  
  // Calculate and display kill/death ratio for each player
  for (let i = 0; i < players.length; i++) {
	const player = players[i]
	const killDeathRatio = (player.kills / Math.max(1, player.deaths)).toFixed(2) 
	
	//to.fixed(2) means to round to 2 decimal places
	
	// Math.max(1, player.deaths) ensures that the denominator is at least 1 to avoid division by zero

	//so KillDeathRatio is player.kills divided by the maximum of 1 and player.deaths

  
	console.log(
	  `${player.name}: ${player.kills} kills, ${player.deaths} deaths, K/D ratio: ${killDeathRatio}`,
	)
  }


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