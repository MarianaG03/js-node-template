const order = {
	price: 10,
	quantity: 2,
};
function calculateTotalPrice(order) {
	return order.price * order.quantity;
}
console.log(calculateTotalPrice(order));

const Username = {
	firstname: "John",
	lastname: "Doe",
};

function FormatUsername(Username) {
	return Username.lastname + ", " + Username.firstname;
}
console.log(FormatUsername(Username));

const world = {
	string1: "Hello",
	string2: "World",
};

function CombineStrings(world) {
	return world.string1 + " " + world.string2;
}
console.log(CombineStrings(world));

const cart = {
	price: 100,
	tax: 0.07,
};

function calculateTax(cart) {
	return cart.price * cart.tax;
}
const cartTotal = cart.price + calculateTax(cart);
console.log(cartTotal);

const nameInfo = {
	firstName: "John",
	lastName: "Doe",
};
function buildFullName(nameInfo) {
	return nameInfo.firstName + " " + nameInfo.lastName;
}
console.log(buildFullName(nameInfo));
