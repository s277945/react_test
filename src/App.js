import logo from './logo.svg';
import './App.css';
import Adder from './components/Adder';
import Title from './components/Title';

function App() {
  return (
    <div className="page-wrap">
        {/* Challenge Title */}
        <h1>Simple React calculator</h1>

      <Adder/>

    </div>
  );
}

export default App;
