import { Routes, Route } from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import Footer from "./components/Footer";
import GutServiceScreen from "./components/GutServiceScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/gutservice" element={<GutServiceScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
