import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "./Components/pages/Login/Login";
import Secret from "./Components/pages/Secret";
import Signup from "./Components/pages/SignUp/sign-up";
import AllTask from "./Components/pages/Task/AllTask/AllTask";
import CompleteTask from "./Components/pages/Task/AllTask/CompleteTask";
import IncompleteTask from "./Components/pages/Task/AllTask/IncompleteTask";
import UpdateTask from "./Components/pages/Task/AllTask/UpdateTask";

import PrivateRoute from "./utils/auth/PrivateRoute";
import AddTask from "./Components/pages/Task/AllTask/AddTask"

function App() {

  return (

    <Router>

      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <PrivateRoute
              redirect="/allTask"
              userShouldBeAuth={false}
              component={<Login/>}
            />
          )}
        />


        <Route
          path="/secret"
          exact
          component={() => (
            <PrivateRoute
              redirect="/"
              userShouldBeAuth={true}
              component={<Secret />}
            />
          )}
        />

        <Route
          path="/sing-up"
          exact
          component={() => (
            <PrivateRoute
              redirect="/allTask"
              userShouldBeAuth={false}
              component={<Signup/>}
            />
          )}
        />

        <Route
          path="/alltask"
          exact
          component={() => (
            <PrivateRoute
              redirect="/"
              userShouldBeAuth={true}
              component={<AllTask/>}
            />
          )}
        />

        <Route
          path="/CompleteTask"
          exact
          component={() => (
            <PrivateRoute
              redirect="/"
              userShouldBeAuth={true}
              component={<CompleteTask/>}
            />
          )}
        />
        <Route
          path="/IncompleteTask"
          exact
          component={() => (
            <PrivateRoute
              redirect="/"
              userShouldBeAuth={true}
              component={<IncompleteTask/>}
            />
          )}
        />
        <Route
          path="/UpdateTask"
          exact
          component={() => (
            <PrivateRoute
              redirect="/"
              userShouldBeAuth={true}
              component={<UpdateTask/>}
            />
          )}
        />

<Route
          path="/addTask"
          exact
          component={() => (
            <PrivateRoute
              redirect="/allTask"
              userShouldBeAuth={true}
              component={<AddTask/>}
            />
          )}
        />

      </Switch>
    </Router>
     
     





  );
}

export default App;
