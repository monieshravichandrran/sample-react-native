export default (state={email:"",username:""},action)=>{
    switch(action.type){
        case "EMAIL_GET":
            return action.payload
        default:
            return state
    }
}