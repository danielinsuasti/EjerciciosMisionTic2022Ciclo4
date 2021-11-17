import 'styles/App.css';
import Index from 'pages/index';
import RhodesianPageInfo from 'pages/rhodesian';

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>          

          <Route path = '/rhodesian'>
            <RhodesianPageInfo /> 
          </Route>

          <Route path = '/'>
            <Index />
          </Route>

          
        </Switch>        
      </Router>
      
    </div>
  );
}


export default App;
