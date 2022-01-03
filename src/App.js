import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './main/pages/MainPage';
import MainNavigation from './shared/components/navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <MainPage />
      </Switch>
    </Router>
  );
}

export default App;
