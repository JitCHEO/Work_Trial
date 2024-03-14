import Page1 from './pages/Page1';
// import Page2 from './pages/page2'
import Page3 from './pages/Page3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        {/* <Route path="/page2" element={<Page2 />} /> */}
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
