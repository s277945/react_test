import './App.css';
import Adder from './components/Adder';
import { HashRouter } from 'react-router-dom' ;

function App() {
  return (
    <HashRouter>
      <div className="page-wrap">
        
        {/* Challenge Title */}
        <h1>Simple React calculator</h1>

        {/* Adder component */}
        <Adder/>

      </div>
    </HashRouter>
  );
}

export default App;
