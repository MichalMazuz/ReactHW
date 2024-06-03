export function getMessage(message){
    return{
         type:"GET_MESSAGE",
         payload:message
    }
}
export function deleteMessage(idmessage){
  
    return{
          type:'DELETE_MESSAGE'
    }
}