import React, {useState} from 'react';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import Main from './components/Main'
import Login from './components/Login'

export default function App() {
  const [state, setstate] = useState()
    
  if(!state) {
  return <Login setstate={setstate} />
  }

  return (
    <Router>
        <Switch>
          <Route path="/"><Main setstate={setstate} /></Route>
        </Switch>
    </Router>
  );
}


