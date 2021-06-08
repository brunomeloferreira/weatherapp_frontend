import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WeatherApp from './pages/WeatherApp';


function App() {

  return (

    <div>
      <Router>
        <Switch>

          <Route path='/' component={WeatherApp} />

        </Switch>
      </Router>

    </div>

  );
}

export default App;
