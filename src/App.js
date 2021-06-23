import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './components/redux/store';
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Details from './components/Details/Details';
import ConfirmationForm  from './components/Checkout/ConfirmationForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'><Products/></Route>
          <Route path='/cart'><Cart/></Route>
          <Route path='/product/:id'><Details/></Route>
          <Router path='/confirm'><ConfirmationForm/></Router>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
