
import Task from './task';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { Button } from "react-bootstrap";

function ListTasks(){
    const tasksTab = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [valueF,setValueF] = useState(1);
    const [filterT,setFilterT] = useState('');
    
    
    const handleDone=()=>{
        setFilterT(true)
    }
    const handleNotDone=()=>{
        setFilterT(false)
    }

    const remouveFilter=()=>{
        setFilterT('')
    }
    return(
        <div>
            
             <div style={{display :'flex', justifyContent:'space-around', flexWrap : 'wrap', width:'20%'}}>
             <Button variant="primary" onClick={()=>remouveFilter()}>All</Button>
             <Button variant="success" onClick={()=>handleDone()} >Done</Button>
             <Button variant="danger" onClick={()=>handleNotDone()} >Not done</Button>
                 
            </div> 

            <br/>
            <br/>

            <div style={{display :'flex', justifyContent:'space-around', flexWrap : 'wrap'}}>
            {filterT === false ? tasksTab.filter(task=>task.isDone === false).map(task => <Task task = {task}></Task>) : filterT === true ? tasksTab.filter(task=>task.isDone == true).map(task =>
            <Task task = {task}></Task>) : tasksTab.map(task => <Task task = {task}></Task>) }</div>
        </div>
    )
}

export default ListTasks;