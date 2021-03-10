import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Background } from './components/Background';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
      <Background />
    </div>
  );
}

export default App;