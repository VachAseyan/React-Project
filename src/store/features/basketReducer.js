import { ADD_TO_BASKET, REMOVE_FROM_BASKET, UPDATE_QUANTITY } from '../features/basketActions';

const initialState = {
  items: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default basketReducer;



