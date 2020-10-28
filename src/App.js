import Home from "./containers/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useLocation } from "react-router-dom";
import About from "./containers/About";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar/>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
