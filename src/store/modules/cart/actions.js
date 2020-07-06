export function addToCartRequest(id) {
  return {
    type: 'ADD_TO_CART_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return { type: 'REMOVE_FROM_CART', id };
}

export function updateCartAmountRequest(id, amount) {
  return {
    type: 'UPDATE_CART_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateCartAmountSuccess(id, amount) {
  return {
    type: 'UPDATE_CART_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
