import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Background } from './components/Background';
import Navbar from './components/header/Navbar';
import Section from './components/Section';

import './components/common.css';

// This script is pseudo code because I don't know how to structure web pages.

function App() {
  return (
    <app>
      <Router>

        <Navbar />

        {/* This is probably path information for... *this* spot, I guess. */}
        <Switch>
          <Route path='/' exact />
        </Switch>

        <Section>
          <Landing />
        </Section>

        

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
    </app>
  );
}

export default App;