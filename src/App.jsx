import { Routes, Route } from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import Footer from "./components/Footer";
import GutServiceScreen from "./components/GutServiceScreen";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/gutservice" element={<GutServiceScreen />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
