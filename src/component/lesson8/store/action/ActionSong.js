export function addSong(song){
    return{
        type:"ADD_SONG",
        payload:song
    }
}
export function selectSong(song){
    return{
        type:"SELECT_SONG",
        payload:song
    }
}
export function deleteSong(idSong){
    return{
        type:"DELETE_SONG",
        payload:idSong
    }
}