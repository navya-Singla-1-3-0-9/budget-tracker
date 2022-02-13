const contextReducer=(state,action)=>{
    if(action.type==='DELETE_TRANSACTION'){
        const transactions= state.filter((t)=> t.id!==action.payload);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
    }else if(action.type==='ADD_TRANSACTION'){
        const transactions =[action.payload,...state];
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
    }
}
export default contextReducer