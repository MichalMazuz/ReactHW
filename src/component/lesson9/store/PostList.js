import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, deletePost } from './action/ActionPost'
import { getMessage } from './action/ActiomMessage'
import { useEffect } from 'react'
const PostList = () => {
    const dis = useDispatch()
    const arrP = useSelector(x => x.post.arrPost)
    useEffect(() => {
        getAllPosts()
    }, [])
    const getAllPosts = async () => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/poskts")
            dis(getPost(data))
        }
        catch
        {
            dis(getMessage({ id: 1, header: "קרתה תקלה בהבאת נתונים" }))
        }
    }
    const delPost = async (idpost) => {
        try{ const { data } = await axios.delete("https://jsonplaceholder.typicode.com/posts/" + idpost)
        dis(deletePost(idpost))}
        catch{
            dis(getMessage({ id: 2, header: "קרתה תקלה במחיקת נתונים"}))
        }
       
    }
    return (<><h1>the list:</h1>
        <ul>{arrP.map(item => {
            return <li key={item.id}><>{item.title}
                <input type='button' value="delete" onClick={() => delPost(item.id)}></input>
            </></li>
        })}</ul>
    </>);
}

export default PostList;

