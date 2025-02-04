import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main className="p-8">
          <Routes>
            {/* //Add Your Page Router HEre */}
            <Route path="/register" element={<Register />} />
            {/* When you Import your page you can Uncomment your route */}
            {/* <Route path="/" element={<Home />} />
             <Route path="/vote" element={<Vote />} />
             <Route path="/blogs" element={<Blogs />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/aboutus" element={<AboutUs />} />
             <Route path="/faqs" element={<FQAs />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
