import logo from './logo.svg';
import './App.css';
import SubeBaja from './componentes/ejercicio1';
import Tareas from './componentes/ejercicio2';
import RegistroFormulario from './componentes/ejercicio3';

function App(props) {
  return (
    <div className="App">
      <SubeBaja/>
      <Tareas/>
      <RegistroFormulario/>
    </div>
  );
}

export default App;
