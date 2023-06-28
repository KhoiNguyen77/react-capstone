import { createSlice } from '@reduxjs/toolkit'
import { http, httpNonAuth, setStoreJson } from '../../util/config';
import { setLoading } from './loadingReducer';

const initialState = {
    cart: [

    ],
    arrProduct: null,
    // order: {
    //     orderDetail: [
    //         {
    //             productId: '',
    //             quantity: 0,
    //         }
    //     ],
    //     email: ""
    // }
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            state.arrProduct = action.payload
        },
        addCartAction: (state, action) => {
            let item = { ...action.payload, quantity: 1 };
            console.log(item);
            let itemCart = state.cart.find(sp => sp.id === item.id && sp.selectedSize === item.selectedSize);
            if (itemCart) {
                itemCart.quantity += 1;
            } else {
                state.cart.push(item);
            }
        },
        delCartAction: (state, action) => {
            console.log(action)
            let indexDel = state.cart.findIndex(item => item.id == action.payload);
            if (indexDel !== -1) {
                state.cart.splice(indexDel, 1)
            }
        },
        changeQuantityAction: (state, action) => {
            const itemquantity = action.payload;
            let item = state.cart.find(item => item.id === itemquantity.id);
            if (item) {
                item.quantity += itemquantity.quantity;
                if (item.quantity < 1) {
                    if (window.confirm('Do you want to delete this item ?')) {
                        state.cart = state.cart.filter(sp => sp.id !== itemquantity.id);
                    } else {
                        item.quantity -= itemquantity.quantity;
                    }
                }
            }
        },
        orderProductAction: (state, action) => {
            // state.order = action.payload;
        }

    }

}
);

export const { getAllProductAction, addCartAction, delCartAction, changeQuantityAction, orderProductAction } = productReducer.actions

export default productReducer.reducer

export const getAllProductApi = () => {

    return async (dispatch) => {
        let loadingState = setLoading('block');
        dispatch(loadingState);
        let res = await httpNonAuth.get('/api/Product');
        const actionProduct = getAllProductAction(res?.data.content);//fulfill
        dispatch(actionProduct);
        let loadingStateNone = setLoading('none');
        dispatch(loadingStateNone);
    }


}
export const orderProductApi = (order) => {
    // return async (dispatch) => {
    //     let res = await http.post('api/Users/order', order);
    //     if (res) {
    //         console.log(res);
    //         window.alert("Order success !")
    //         setStoreJson(res.data.content);
    //         const action = orderProductAction();
    //         dispatch(action);
    //     }

    // }

}

