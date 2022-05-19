// import { addOrder } from '../Action/index';
// import { db, ref, set, remove } from "../../config/fire";
// import { v4 as uuidv4 } from 'uuid';

// export const addShippingOrder = (orderData) => (dispatch, getState) => {
//     // Add order item to db
//     const orderId = uuidv4();
//     const { userReducer: { user: { uid } } } = getState();
//     const reference = ref(db, `/shippingData/${uid}/${orderId}`);
//     set(reference, orderData).then(user => {
//         dispatch(addShippingOrder({orderData}))
//     })
//         .catch(err => console.log({ err }))

// }