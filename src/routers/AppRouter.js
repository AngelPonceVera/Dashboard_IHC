import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Chakra Views //
import HomeViews from './../views/Intranet/HomeViews/HomeViews.js';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* Chakra Views */}
        <Route exact path='/' component={HomeViews} />
      </Switch>
    </Router>
  );
}