import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export default function cardItems(state=[],action){
    switch(action.type){
        case ADD_TO_CART:
            return[
                ...state,
               { cardData:action.data}
            ]
       
        case REMOVE_TO_CART:
            state.pop();
            return[
                ...state
            ]
        default:return state;
    }
}