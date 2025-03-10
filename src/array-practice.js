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

//Reduce Method
// basically it is takin gthe sum of the first number and adding it to the next number in the array and so on.
//Reduce example with players array
//Will add up the total frags of all players in the array
const TotalFrags = players.reduce((total, player) => {
	return total + player.frags;
}, 0);
console.log(TotalFrags);

//usong the find method i learned this on wednesday!
const moreFragsThanDeaths = players.find(
	(player) => player.frags > player.deaths,
);
console.log(moreFragsThanDeaths);
//will sort through the array and find the first player with more frags than deaths.
