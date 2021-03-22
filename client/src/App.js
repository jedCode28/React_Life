import './App.css';
import {Container}from 'semantic-ui-react'
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PassDataDemo from './components/PassDataDemo';
import Clock from './components/Clock';

function App() {
  return (
    <>
    <NavBar />
     <Container>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/about' component={About} />
         <Route exact path='/passdata/:id' component={PassDataDemo}/>
         {/* <Route exact path='/clock' component={Clock} /> */}
         
       </Switch>
     </Container>
    </>
  );
}

export default App;
