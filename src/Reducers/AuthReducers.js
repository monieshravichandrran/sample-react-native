export default (state={login:false,type:-1},action)=>{
    switch (action.type){
        case "SIGN_IN":
            return action.payload;
        default:
            return state
    }
}