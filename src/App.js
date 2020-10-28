import Home from "./containers/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects"
import Contact from "./containers/Contact"
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar/>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
