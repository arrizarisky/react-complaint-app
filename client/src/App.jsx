import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Chatbot from './pages/Chatbot';
import GetStarted from './pages/GetStarted';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </Router>

      
    </>
  );
}
