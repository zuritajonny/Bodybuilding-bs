import { Routes, Route } from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import Footer from "./components/Footer";
import GutServiceScreen from "./components/GutServiceScreen";
import Checkout from "./components/Checkout";
import Canceled from "./components/Canceled";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/coaching" element={<HomeScreen />} />
        <Route path="/coaching/gutservice" element={<GutServiceScreen />} />
        <Route path="/coaching/checkout" element={<Checkout />} />
        <Route path="/coaching/canceled" element={<Canceled />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
