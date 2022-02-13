const contextReducer=(state,action)=>{
    if(action.type==='DELETE_TRANSACTION'){
        const transactions= state.filter((t)=> t.id!==action.payload);
        return transactions;
    }else if(action.type==='ADD_TRANSACTION'){
        const transactions =[action.payload,...state];
        return transactions;
    }
}
export default contextReducer