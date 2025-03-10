import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <div className="App">
        <main className="p-8">
          <Routes>
            //Add Your Page Router HEre
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
