import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
