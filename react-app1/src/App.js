import React from 'react'
import { TableList } from './components/TableList';
import { Login } from './components/Login';
import Homepage from './pages/Homepage/Homepage';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
export default function App() {
 

  return (
    <>
        <Router>
          <Switch>
           <Route exact path="/" component={Login} />
           <Route exact path = "/home" component={TableList}/>
           <Route exact path = "/userdetails" component={Homepage}/>
          </Switch>
        </Router>
    </>
  )
}

              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              