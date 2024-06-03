import { useDispatch, useSelector } from "react-redux";
import {deleteSong, selectSong} from './store/action/ActionSong'
const ListSong= () => {
let arr=useSelector(x=>x.arrSongs)
let dis=useDispatch()
const del=(id)=>{
      dis(deleteSong(id))
}
const playS=(song)=>{
    dis(selectSong(song))
}
    return ( <><h1>THE ALL SONGS</h1>
    <ul>{arr.map(item=>{return<>
    <li>{item.name}</li>
    <input type="button" value="deleteSong" onClick={()=>del(item.id)}></input>
    <input type="button" value="playSong" onClick={()=>playS(item)}></input>
    </>})}</ul>
    </>)
}
 
export default ListSong;