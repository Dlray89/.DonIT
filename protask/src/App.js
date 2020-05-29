import React from 'react';
import { Route, Switch} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import ProjectPage from './Pages/ProjectPage'
import AddProject from "./Projects/addProject"
import AddTask from "./tasks/AddTask"
import AddTags from "./tags/AddTags"
import ProjectTask from "./tasks/taksList"
import Project from "./Projects/projects"
import Login from "./Pages/login"
import PrivateRoute from './utils/privateRoute'







function App() {
  return (
    <div style={{display:'flex'}} className="App">
    
    <Switch>  
        <Route exact path='/' component={Login}   />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/addproject" component={AddProject} />
        <Route exact path="/projects/:id" component={Project}  />
        <Route exact path="/addtasks" component={AddTask} />
        <Route exact path="/addtags" component={AddTags} />
        <Route exact path="/projects/:id/tasks" component={ProjectTask} />

        <PrivateRoute exact path='/dashboard' component={Dashboard}   />
        
    </Switch>
    </div>
  );
}

export default App;
