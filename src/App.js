import Home from "./containers/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useLocation } from "react-router-dom";
import About from "./containers/About";
import Projects from "./containers/Projects"
import Contact from "./containers/Contact"
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
