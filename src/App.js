import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Kegelbahn from './components/Kegelbahn';
import Eventspage from './components/Eventpage';
import ContactUs from './components/ContactUs';



function App() {

  return (
    <Router>
    <Navigation />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/events" exact component={Eventspage}/>
    <Route path="/kegelbahn" exact component={Kegelbahn}/>
    <Route path="/contact" component={ContactUs} />

    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
