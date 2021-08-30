
import { Card,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Delete } from "./action";

function Task({task}){
    const dispatch = useDispatch();
    return(
        <div>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Task ID : {task.id}</Card.Title>
            <ReadMore task = {task}></ReadMore>
            <Card.Text style={{color : task.isDone ? 'green' : 'red' }}>
            {task.isDone ? 'Task done' : 'Task not done'}
            </Card.Text>
            <Button variant="primary" onClick={()=>dispatch(Delete(task))}>Delete Task</Button>
            <br/>
            <br/>
            <EditTask task = {task}></EditTask>
        </Card.Body>
        </Card>
            
        </div>
    )
}

export default Task;