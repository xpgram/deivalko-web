import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Background } from './components/Background';
import Navbar from './components/header/Navbar';
import Section from './components/Section';

import './components/common.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Switch>          {/* What does Switch do? */}
          <Route path='/' exact />
        </Switch>

        <Background />
        {/* Rename to landing or something; where should 'main' go? */}
        {/* Also, make it a container that has the logo image in it. */}

        <Section>
          <h1>Hey</h1>
          <p style={{maxWidth: '30rem', margin: '0 auto 0 auto'}}>
            My name is <span style={{color: '#969'}}>Dei</span> <span style={{color: '#A58'}}>Valko</span>.
            I am an indie games designer</p>
          <p style={{maxWidth: '50rem', margin: '0 auto 0 auto'}}>
            and artist based in Oregon.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iusto delectus quod corrupti necessitatibus magnam perferendis voluptas voluptate totam enim animi rem neque nisi doloribus cumque quis, laborum cum at?
            {/* lorem30, this was */}
          </p>
        </Section>

        <Background />

      </Router>
    </div>
  );
}

export default App;