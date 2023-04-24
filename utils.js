// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return 'Hello';
};

const area = (w, h) => {
  // should return the area

  return w < 0 || h < 0 ? null : w * h;
};

const perimeter = (w, h) => {
  // should return the perimeter
  return w < 0 || h < 0 ? null : 2 * (w + h);
};

const circleArea = (r) => {
  // should return the area of the circle
  return r < 0 ? null : Math.PI * r * r;
};

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = [];

const clearCart = () => {
  shoppingCart.length = 0;
};

const createItem = (name, price) => {
  return { name, price, quantity: 1 };
};

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart;
};

const addItemToCart = (item) => {
  // should add item to shopping cart
  const index = shoppingCart.findIndex((cartItem) => {
    return cartItem.name === item.name;
  });
  if (index === -1) {
    shoppingCart.push(item);
  } else {
    shoppingCart[index].quantity++;
  }
};

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
};

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const index = shoppingCart.findIndex((cartItem) => {
    return cartItem.name === item.name;
  });

  if (shoppingCart[index].quantity > 1) {
    shoppingCart[index].quantity--;
  } else {
    shoppingCart.splice(index, 1);
  }
};

const totalCost = () => {
  // should return the total cost of all items in the cart
  return shoppingCart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
};

module.exports = {
  sayHello,
  area,
  perimeter,
  circleArea,
  clearCart,
  createItem,
  getShoppingCart,
  addItemToCart,
  getNumItemsInCart,
  removeItemFromCart,
  totalCost,
};
