import { Routes, Route } from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import Footer from "./components/Footer";
import GutServiceScreen from "./components/GutServiceScreen";
import Checkout from "./components/Checkout";
import Canceled from "./components/Canceled";
import RedirectPage from "./components/RedirectPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/blookworkandguttest" element={<GutServiceScreen />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/canceled" element={<Canceled />} />
        <Route path="*" element={<RedirectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
