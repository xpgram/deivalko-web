import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Background } from './components/Background';
import Navbar from './components/header/Navbar';

import './components/common.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>

        <Background />
        <div className="section-glow-upward">
          <Background />
        </div>
      </Router>
    </div>
  );
}

export default App;