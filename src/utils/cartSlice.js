import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            if (
                state.items.filter(
                    (item) =>
                        item.id === action.payload.id &&
                        item.name === action.payload.name
                ).length > 0
            ) {
                state.items = state.items.map((item) => {
                    if (
                        item.id === action.payload.id &&
                        item.name === action.payload.name
                    ) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items
                .map((item) => {
                    if (
                        item.id === action.payload.id &&
                        item.name === action.payload.name
                    ) {
                        return item.quantity - 1 === 0
                            ? undefined
                            : { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter((item) => item);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
