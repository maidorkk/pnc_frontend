export default(state, action) =>{

    switch(action.type){
        case 'CREATE_STUDENT':
        return{
            ...state,
            student: [...state.student, action.payload]
        }
        default: return state;
    };
}