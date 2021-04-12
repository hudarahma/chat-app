import ProtectedRoute from "./components/ProtectedRoute";
import ContextProvider from "./Context";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  return (
    <ContextProvider>
      <Router>
        <Route path='/login' exact component={Login} />
        <ProtectedRoute path='/' exact component={Home} />
      </Router>
    </ContextProvider>
   
  );
}

export default App;
