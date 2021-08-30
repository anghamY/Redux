
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTasks from './ListTasks';
import { Container } from 'react-bootstrap';

function App() {
  return(
    <div>
    <Container>
    
    <br/>  
    <ListTasks></ListTasks>
    </Container>
    
  </div>
  )
}
export default App;
