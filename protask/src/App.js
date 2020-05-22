import React from 'react';
import { Route, Switch} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import ProjectPage from './Pages/ProjectPage'
import AddProject from "./Projects/addProject"







function App() {
  return (
    <div style={{display:'flex'}} className="App">
    
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/addproject" component={AddProject} />
        
        
    </Switch>
    </div>
  );
}

export default App;