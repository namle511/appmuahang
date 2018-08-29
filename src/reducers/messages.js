import * as types from './../constants/ActionType';
import * as MSG from './../constants/Message';

var initState = MSG.MSG_WELCOME;
console.log(initState);

const messages = (state = initState, action) => {
    
    switch(action.type){
        case types.CHANGE_MSG: 
            console.log(action);
            return action.msg;
        default: return state;
    }
}



export default messages ;