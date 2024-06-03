import { Navigate } from "react-router-dom";
const  Protected= ({children,user}) => {
    if(!user.name&&!user.password){
        return <Navigate to="/home"></Navigate>}
   return children
}
 
export default Protected;