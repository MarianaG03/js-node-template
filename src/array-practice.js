// Basic numbers array for example
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Understandin the modulu operator

5 % 2; //1
4 % 2; //0

//Putting Filters and Modulus Together
const oddNumbers = numbers.filter((number) => number % 2);
console.log(oddNumbers);
//Exercise
const players = [
	{ name: "DoomGuy", frags: 25, deaths: 0 },
	{ name: "Slayer", frags: 25, deaths: 1 },
	{ name: "Marine", frags: 12, deaths: 15 },
	{ name: "Noob", frags: 0, deaths: 25 },
];

const playersWithMoreFragsThanDeaths = players.filter(
	(player) => player.frags > player.deaths,
);
//Console will log the players with more frags than deaths useing the greater than operator to show more frage than deaths.
// If More frags boolean is true, the player will be logged.
console.log(playersWithMoreFragsThanDeaths);
