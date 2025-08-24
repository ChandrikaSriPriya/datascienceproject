// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  Redirect,
} from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";
import LandingNavbar from "./components/LandingNavbar";
import HomeNavbar from "./components/HomeNavbar";
import LandingFooter from "./components/LandingFooter";
import HomeFooter from "./components/HomeFooter";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import RoleDetails from "./pages/RoleDetails";
import RoleOverview from "./pages/RoleOverview";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import SkillPage from "./pages/SkillPage";
import CareerAssessment from "./pages/CareerAssessment";

import "./styles/global.css";
import "./styles/theme.css";

// Frame must be inside a Router to use useLocation
const Frame = ({ children }) => {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  return (
    <>
      {/* Only show HomeNavbar for non-landing, non-auth pages */}
      {!isLanding && !isAuthPage && <HomeNavbar />}
      {children}
      {/* Only show HomeFooter for non-landing, non-auth pages */}
      {!isLanding && !isAuthPage && <HomeFooter />}
    </>
  );
};

const RoutesWithFrame = () => (
  <Frame>
    <Switch>
      {/* Landing & auth */}
      <Route path="/" exact component={LandingPage} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      {/* App pages */}
      <Route path="/home" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/career-assessment" exact component={CareerAssessment} />

      {/* Roles */}
      <Route path="/roles/:id" exact component={RoleOverview} />
      <Route path="/roles/:id/roadmap" exact component={RoleDetails} />

      {/* Skill and roadmap (frontend-only for now) */}
      <Route path="/skills/:roleSlug" exact component={SkillPage} />
      <Route path="/roadmap/:roleSlug" exact component={Roadmap} />
      <Route path="/roadmap" exact component={Roadmap} />

      {/* Fallback: redirect unknown routes to landing */}
      <Redirect to="/" />
    </Switch>
  </Frame>
);

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        {/* This single Route ensures Frame gets Router context */}
        <Route component={RoutesWithFrame} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
