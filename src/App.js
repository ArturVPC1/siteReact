import './App.css';
import { useState } from 'react';
import MainLayout from './layout/MainLayout';
import Greeting from './components/Greeting';
import { Link } from "react-router-dom";

function App() {

  const [name, setName] = useState("")

  const [studants, setStudants] = useState(['Artur']);

  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudants(currentStudants => [...currentStudants, name])
    setName('');
  }

  const handleDelete = (deleteStudant) => {
    const newStudents = studants.filter((studant) => studant !== deleteStudant);
    setStudants(newStudents);
  }

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  }

  return (
    <MainLayout>

      <br></br>
      <Greeting></Greeting>
      {showNotification ? <div className='notification'>Notification</div> : ''}

      <button onClick={() => toggleNotification()}>Toggle Notification</button>

      <form onSubmit={handleSubmit}>
        <div>Qual seu nome?</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type='submit' />
      </form>
      <br></br>
      <ul>
        {
          studants.map((studant, index) => <li key={index}>{studant} <button onClick={() => handleDelete(studant)}>Delete</button> </li>)
        }
        <Link to="/crud" className='botaoEntrar'>ENTRAR</Link>
      </ul>
    </MainLayout>
  );
}

export default App;