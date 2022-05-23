import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Friendapp from './components/Friendapp';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewFriend from './components/ViewFriend';

function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  
  <Route path='/' exact element={<Friendapp/>}/>
  <Route path='/view' exact element={<ViewFriend/>}/>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
