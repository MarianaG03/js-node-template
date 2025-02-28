const order = {
	price: 10,
	quantity: 2,
};
function calculateTotalPrice(order) {
	return order.price * order.quantity;
}
console.log(calculateTotalPrice(order));
