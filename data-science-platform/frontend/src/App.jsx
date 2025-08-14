import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import LandingNavbar from './components/LandingNavbar';
import HomeNavbar from './components/HomeNavbar';
import LandingFooter from './components/LandingFooter';
import HomeFooter from './components/HomeFooter';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RoleDetails from './pages/RoleDetails';
import RoleOverview from './pages/RoleOverview';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import SkillPage from './pages/SkillPage';
import './styles/global.css';

const Frame = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const isLanding = path === '/' || path === '/signin' || path === '/signup';

  return (
    <>
      {isLanding ? <LandingNavbar /> : <HomeNavbar />}
      {children}
      {isLanding ? <LandingFooter /> : <HomeFooter />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          render={() => (
            <Frame>
              <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/home" component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                {/* Updated role routes */}
                <Route path="/roles/:id" exact component={RoleOverview} />
                <Route path="/roles/:id/roadmap" component={RoleDetails} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/roadmap" component={Roadmap} />
                <Route path="/skills/:roleSlug" component={SkillPage} />
              </Switch>
            </Frame>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;