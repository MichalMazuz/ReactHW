import * as actionType from '../ActionType'
const initialState={
    message:null
}
export default function MessageReducer(state=initialState,action){
    switch(action.type){
        case actionType.getMessage:
            return{
                message:action.payload
            }
        case actionType.deleteMessage:
        return {
            message:null
           };

    }
    return state;

   
}