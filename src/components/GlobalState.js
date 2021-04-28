import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const initialState ={
    student: []

}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) =>{

const [state,dispatch] = useReducer(Reducer,initialState);

function createStudent(student){
    dispatch({
        type: 'CREATE_STUDENT',
        playload: student
    })
}

    return(

    <GlobalContext.Provider value ={{
        student: state.student,
        createStudent
    }}>

    {children}</GlobalContext.Provider>);

}