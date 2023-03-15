import Persona from './componentes/ejercicio.js';

function App() {
  return (
    <div className="App">
      <Persona name="Doe, Jane" age={45} hair="Black" />
      <Persona name="Smith, John" age={88} hair="Brown" /> 
      <Persona name="Fillmore, Millard" age={50} hair="Brown"/>
      <Persona name="Smith, Maria" age={62} hair="Brown"/>
    </div>
  );
}

export default App;
