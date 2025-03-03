const players = [
	{ name: 'DoomGuy', kills: 25, deaths: 5 },
	{ name: 'Slayer', kills: 18, deaths: 7 },
	{ name: 'Marine', kills: 12, deaths: 12 },
  ]
  
  // Calculate and display kill/death ratio for each player
  for (let i = 0; i < players.length; i++) {
	const player = players[i]
	const killDeathRatio = (player.kills / Math.max(1, player.deaths)).toFixed(2)
  
	console.log(
	  `${player.name}: ${player.kills} kills, ${player.deaths} deaths, K/D ratio: ${killDeathRatio}`,
	)
  }