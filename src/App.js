import logo from './logo.svg';
import './App.css';
import Adder from './components/Adder';
import Title from './components/Title';

function App() {
  return (
    <div className="page-wrap">
      
      <Title>React Version: </Title>
      <Adder/>

    </div>
  );
}

export default App;
