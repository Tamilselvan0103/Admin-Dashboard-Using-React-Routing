import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ButtonCards from './files/Components/Buttons';
import Cards from './files/Components/Cards';
import Dashboard from './files/Dashboard';
import ForgotPassword from './files/Pages/Forgotpassword';
import Loginpages from './files/Pages/Login';
import Register from './files/Pages/Register';
import Animation from './files/Utilities/Animation';
import Border from './files/Utilities/Borders';
import Colors from './files/Utilities/Colors';
import Others from './files/Utilities/other';



function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path ="/">
        <Dashboard/>
      </Route>
      <Route path ="/button">
        <ButtonCards/>
      </Route>
      <Route path = "/cards">
        <Cards/>
      </Route>
      <Route path="/animation">
        <Animation/>
      </Route>
      <Route path = "/border">
        <Border/>
      </Route>
      <Route path = "/colors">
        <Colors/>
      </Route>
      <Route path = "/others">
        <Others/>
      </Route>
      <Route path ="/login">
        <Loginpages/>
      </Route>
      <Route path ="/register">
        <Register/>
      </Route>
      <Route path="/forgot">
        <ForgotPassword/>
      </Route>
     </Switch>
     </div>
  );
}

export default App;
