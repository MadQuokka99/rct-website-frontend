import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";
import WebRedirect from "./components/WebRedirect";
import PageNotFound from "./components/pages/NotFound/PageNotFound";
import AboutUs from "./components/pages/AboutUs/AboutUs";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<WebRedirect />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
