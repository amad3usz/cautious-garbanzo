import { HOTDOGS } from '../shared/hotdogs';
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_DELIVERY, SUB_DELIVERY } from './ActionTypes';

export const initialState = {
	items: HOTDOGS,
	addedItems: [],
	total: 0,
	isModalOpen: false,
};

export const Reducer = (state = initialState, action) => {
	if (action.type === ADD_TO_CART) {
		let addedItem = state.items.find((item) => item.id === action.id);
		let existed_item = state.addedItems.find((item) => action.id === item.id);
		if (existed_item) {
			addedItem.quantity += 1;
			return {
				...state,
				total: state.total + addedItem.price,
			};
		} else {
			addedItem.quantity = 1;
			let newTotal = state.total + addedItem.price;
			return {
				...state,
				addedItems: [...state.addedItems, addedItem],
				total: newTotal,
			};
		}
	}
	if (action.type === REMOVE_ITEM) {
		let itemToRemove = state.addedItems.find((item) => action.id === item.id);
		let new_items = state.addedItems.filter((item) => action.id !== item.id);
		let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
		console.log(itemToRemove);
		return {
			...state,
			addedItems: new_items,
			total: newTotal,
		};
	}
	if (action.type === ADD_QUANTITY) {
		let addedItem = state.items.find((item) => item.id === action.id);
		addedItem.quantity += 1;
		let newTotal = state.total + addedItem.price;
		return {
			...state,
			total: newTotal,
		};
	}
	if (action.type === SUB_QUANTITY) {
		let addedItem = state.items.find((item) => item.id === action.id);
		if (addedItem.quantity === 1) {
			let new_items = state.addedItems.filter((item) => item.id !== action.id);
			let newTotal = state.total - addedItem.price;
			return {
				...state,
				addedItems: new_items,
				total: newTotal,
			};
		} else {
			addedItem.quantity -= 1;
			let newTotal = state.total - addedItem.price;
			return {
				...state,
				total: newTotal,
			};
		}
	}

	if (action.type === ADD_DELIVERY) {
		return {
			...state,
			total: state.total + 6,
		};
	}

	if (action.type === SUB_DELIVERY) {
		return {
			...state,
			total: state.total - 6,
		};
	} else {
		return state;
	}
};
