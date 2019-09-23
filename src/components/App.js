import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';
import NotFound from './NotFound';
import Featured from './Featured';
const App = () => (
  <HashRouter>
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' render={() => <About title='About' />}></Route>
        <Route exact path='/teachers' component={Teachers}></Route>
        <Route path='/teachers/:topic/:name' component={Featured}></Route>
        <Route path='/courses' component={Courses}></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
