import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from './views/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={HomeView} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;