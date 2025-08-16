import './styles/globals.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';

function App() {
  // This would normally come from your auth context/service
  const isAuthenticated = true;

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/browse" 
            element={isAuthenticated ? <HomePage /> : <Navigate to="/signin" />} 
          />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;