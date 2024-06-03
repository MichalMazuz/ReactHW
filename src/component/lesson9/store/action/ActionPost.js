export function getPost(post){
    return{
         type:"GET_POST",
         payload:post
    }
}
export function deletePost(idPost){
  
    return{
          type:'DELETE_POST',
          payload:idPost
    }
}