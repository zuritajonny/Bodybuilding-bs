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
        <Route path="/onlinecoaching" element={<HomeScreen />} />
        <Route
          path="/onlinecoaching/gutservice"
          element={<GutServiceScreen />}
        />
        <Route path="/onlinecoaching/checkout" element={<Checkout />} />
        <Route path="/onlinecoaching/canceled" element={<Canceled />} />
        <Route path="*" element={<RedirectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
