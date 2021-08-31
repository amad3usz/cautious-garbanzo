import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_DELIVERY, SUB_DELIVERY, RESETSTATE } from './ActionTypes';

export const addToCart = (id) => {
	return {
		type: ADD_TO_CART,
		id,
	};
};

export const removeItem = (id) => {
	return {
		type: REMOVE_ITEM,
		id,
	};
};

export const subtractQuantity = (id) => {
	return {
		type: SUB_QUANTITY,
		id,
	};
};

export const addQuantity = (id) => {
	return {
		type: ADD_QUANTITY,
		id,
	};
};

export const addDelivery = () => {
	return {
		type: ADD_DELIVERY,
	};
};

export const subtractDelivery = () => {
	return {
		type: SUB_DELIVERY,
	};
};

export const resetState = () => {
	return {
		type: RESETSTATE,
	};
};
