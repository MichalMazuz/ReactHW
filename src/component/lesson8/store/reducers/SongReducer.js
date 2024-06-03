const initialState={
    arrSongs:[{id:1,name:"aaaaaaa",album:"avraam",diration:3.6},
    {id:2,name:"mmmmmmmm",album:"avraam",diration:1.6},
    {id:3,name:"aaaaajhga",album:"avraam",diration:4.6}],
    selectSong:null
}
export default function SongReducer(state=initialState,action){
    switch(action.type){
        case "ADD_SONG":
            let copy=[...state.arrSongs,action.payload]
            return{
                arrSongs:copy,
                selectSong:state.selectSong
            }
            case "SELECT_SONG":
                return{
                    arrSongs:state.arrSongs,
                    selectSong:action.payload
                }
                case "DELETE_SONG":
            let copy1=state.arrSongs.filter(i=>i.id!=action.payload)
            return{
                arrSongs:copy1,
                selectSong:state.selectSong
            } 
    }
    return state;

   
}