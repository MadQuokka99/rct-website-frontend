import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
