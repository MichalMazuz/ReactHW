import * as actionType from '../ActionType'
const initialState={
    arrPost:[],
    openpost:null
}
export default function PostReducer(state=initialState,action){
    switch(action.type){
        case actionType.getAllPosts:
            return{
               ...state,
                arrPost:action.payload
            }
        case actionType.deletPost:
        let copy = state.arrPost.filter(post => post.id !== action.payload);
        return {
             ...state,
             arrPost: copy
           };

    }
    return state;

   
}