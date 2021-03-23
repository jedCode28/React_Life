import './App.css';
import {Container}from 'semantic-ui-react'
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PassDataDemo from './components/PassDataDemo';
import LessText from './components/LessText';
import StepTracker from './components/StepTracker';
import ListOfThings from './components/ListOfThings';
import LoginForm from './components/LoginForm';
import Login2Form from './components/Login2Form';

function App() {
  return (
    <>
    <NavBar />
     <Container>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/about' component={About} />
         <Route exact path='/passdata/:id' component={PassDataDemo}/>
         <Route exact path='/LessText' component={LessText} />
         <Route exact path='/StepTracker' component={StepTracker} />
         <Route exact path='/ListOfThings' component={ListOfThings} />
         <Route exact path='/LoginForm' component={LoginForm} />
         <Route exact path='/Login2Form' component={Login2Form} />

         
       </Switch>
     </Container>
    </>
  );
}

export default App;
