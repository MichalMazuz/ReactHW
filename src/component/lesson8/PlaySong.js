import { useSelector } from "react-redux";
const PlaySong = () => {
    let song=useSelector(x=>x.selectSong)
    return (<div>{song&&<>
        <h1>{song.name}</h1>
        <h1>{song.album}</h1>
        <h1>{song.diration}</h1>
        </>}</div> );
}
 
export default PlaySong;