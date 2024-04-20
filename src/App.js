import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Main";
function App() {
  return (
    <div> 
    <Router>
    <Routes>
      <Route exact path="/" element={<Main/>} />
    </Routes>
  </Router>
  </div>
    
  );
}

export default App;
