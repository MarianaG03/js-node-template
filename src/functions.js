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
