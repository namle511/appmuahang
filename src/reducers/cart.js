import * as types from './../constants/ActionType';

var data = JSON.parse( localStorage.getItem('cart') );

var initState = data ? data : [];

console.log(initState);

const cart = (state = initState, action) => {
    var { product, quantity } = action;
    switch(action.type){
        case types.ADD_TO_CART: 
            console.log(action);
            var index = findId(state, product);
            if(index !== -1){
                state[index].quantity += action.quantity;
                console.log(state);
            }else{
                console.log('cannot find');
                state.push({
                    product, 
                    quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.CHANGE_QUAN:
            console.log('action', action);
            console.log('state', state);
            var index1 = findId(state, product);
            console.log('id', index1);
            if(action.b === true) {
                state[index1].quantity += 1;
            }else{
                state[index1].quantity -= 1;
                if(state[index1].quantity === 0){
                    state.splice(index1, 1);
                }
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.DELETE_CART_ITEM:
            console.log('action', action);
            var index2 = findId(state,product);
            state.splice(index2,1);
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}

var findId = (state, product) =>{
    for(var i=0; i< state.length; i++){
        if(product.id === state[i].product.id){
            return i;
        }
    }
    return -1;
}

export default cart ;