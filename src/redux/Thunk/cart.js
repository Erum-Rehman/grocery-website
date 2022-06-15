import { updateCart, removeFromCart, deleteCart } from '../Action/index';
import { db, ref, set, remove } from "../../config/fire";

export const updateCartItem = (cartItem, currentCart) => (dispatch, getState) => {
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

    // Add Cart item to db
    const { userReducer: { user: { uid } } } = getState();
    if (uid) {
        const reference = ref(db, `/cart/${uid}/${cartItem.id}`);
        set(reference, cartItem).then(res => {
            dispatch(updateCart({ updatedProducts, total }))
        })
            .catch(err => console.log({ err }))
    } else {
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        localStorage.setItem('total', total);
        dispatch(updateCart({ updatedProducts, total }))
    }

}
export const removeCartItem = (id) => (dispatch, getState) => {
    const { cart: { products } } = getState();
    const currentCartItem = products.find((item) => item.id === id)
    let updatedTotal;
    if (currentCartItem) {
        products.splice(products.indexOf(currentCartItem), 1);
        updatedTotal = products.reduce((acc, current) => acc + current.totalPrice, 0)
    }

    // remove Cart item from db
    const { userReducer: { user: { uid } } } = getState();
    const reference = ref(db, `/cart/${uid}/${id}`)
    remove(reference).then(res => {
        // console.log({'item':uid, id})
        dispatch(removeFromCart({ products, updatedTotal }))
        // console.log("removed")
    })
        .catch(err => console.log({ "Remove failed: ": err }))

}
export const deleteCartItems = () => (dispatch, getState) => {
    const { cart: { products }, userReducer: { user: { uid } } } = getState();
    const reference =  ref(db,`/cart/${uid}`).get().toPromise()       
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc(reference).delete();
            });
            dispatch(deleteCart())
        });
}
