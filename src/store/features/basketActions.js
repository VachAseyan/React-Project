
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';


export const addToBasket = (item) => ({
  type: ADD_TO_BASKET,
  payload: item,
});

export const removeFromBasket = (itemId) => ({
  type: REMOVE_FROM_BASKET,
  payload: itemId,
});

export const updateQuantity = (itemId, newQuantity) => ({ 
  type: UPDATE_QUANTITY,
  payload: { itemId, newQuantity },
});






