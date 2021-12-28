import Form from "./component/Form";
import Login from "./component/Login";
import { Route} from 'react-router-dom'
import Welcome from "./component/Welcome";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Form}/> 
      <Route exact path="/signup" component={Form}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/welcome" component={Welcome}/>
    </div>
  );
}

export default App;
