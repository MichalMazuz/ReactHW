import { useParams} from "react-router-dom";
import arr from './protected/Data'; 
 
const CoursesDatails = () => {
   let{id}= useParams()
   let object=arr.find(c=>c.id==id)
    return ( <><h2>The Datails are:</h2>
    <p>name:{object.name}</p>
    <p>price:{object.price}</p>
    <p>num:{object.num}</p>
    </> );
}
export default CoursesDatails;