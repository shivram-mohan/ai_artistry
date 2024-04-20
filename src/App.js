import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Main from "./Main";
function App() {
  return (
    <div> 
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/main" element={<Main/>} />
    </Routes>
  </Router>
  </div>
    
  );
}

export default App;
