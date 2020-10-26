const InitialState = {
    list:[],
    activeId:null
}
const hobbyReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "ADD_NEW_HOBBY":{
            const newList = [...state.list];
            newList.push(action.payload)
            
            return {
                ...state,
                list:newList
            };
        }
            
        case "SET_ACTIVE_HOBBY":{
            const newActiveId = action.payload.id;
            return {
                ...state,
                active:newActiveId
            } 
        }
        default :{
            return state;
        }    
    }
}
export default hobbyReducer;