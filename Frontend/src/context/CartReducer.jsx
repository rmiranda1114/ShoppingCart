export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0)
}

const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            action.product.quantity = 1
            return [...state, action.product]
        case "Remove":
            return state.filter(item => item.id !== action.id)
            
        case "Increase":
            const increaseIndex = state.findIndex (item => item.id === action.id);
            if (state[increaseIndex].quantity < 10) {
                state[increaseIndex].quantity += .5;
                return [...state];
            } else return state;
        case "Decrease":
            const decreaseIndex = state.findIndex (item => item.id === action.id);
            if (state[decreaseIndex].quantity > 1) {
                state[decreaseIndex].quantity -= .5;
                return [...state];
            } else return state;
        default:
            state;

    }
}

export default CartReducer;