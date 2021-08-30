
import tasks from './task';
import { DELETE,ADD,EDIT} from "./Action_types"
import {useState} from 'react';
const initialState ={
    Tasks: [
        {
            id:1,
            description:'sport , ' ,    
            isDone: true    
        },
        {
            id:2,
            description:'go my code',
            isDone: true
            
        },
        {
            id:3,
            description:'musique',
            isDone: true
            
        },
        {
            id:4,
            description:'jbfhjbfehzfbh',
            isDone: true
            
        }

    ]
}

const rootReducer = (state = initialState, action) => {
   
    
    switch (action.type) {
        case ADD:
            return {
                tasks: [...state.tasks, action.payload]
            }
        case DELETE:
            return {
                tasks : state.tasks.filter(task => task.id !== action.payload.id)
            }
        case EDIT:
            return {
                tasks : state.tasks.map(task => task.id === action.payload.id ? {...task,id : action.payload.id, description : action.payload.description,isDone : action.payload.isDone} : task)
            }
     
                      
                  
        default:
            return state
    }
}

export default rootReducer;



