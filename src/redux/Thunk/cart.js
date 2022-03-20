import { updateCart, removeFromCart } from '../Action/index';

export const updateCartItem = (cartItem, currentCart) => (dispatch) => {
    const currentCartItem = currentCart.find((item) => item.id === cartItem.id)
    let updatedProducts;
    let total;
    if (currentCartItem) {
        updatedProducts = currentCart.map((item) => {
            if (cartItem.id === item.id) {
                item.totalPrice = item.discountPrice ? item.discountPrice * item.count
                    : item.oldPrice * item.count;
            }
            return item;
        })

    } else {
        cartItem.totalPrice = cartItem.discountPrice ? cartItem.discountPrice : cartItem.oldPrice;
        updatedProducts = [...currentCart, cartItem];
    }
    total = updatedProducts.reduce((acc, current) => acc + current.totalPrice, 0)
    dispatch(updateCart({ updatedProducts, total })
    )
}
export const removeCartItem = (currentCart) => (dispatch) => {
    const allProducts = currentCart;
    allProducts.splice(currentCart, 1);
    const updatedTotal = allProducts.reduce((acc, current) => acc + current.totalPrice, 0)
    dispatch(removeFromCart({ currentCart, updatedTotal })
    )
}