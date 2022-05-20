import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import Rules from "./Pages/Rules/rules";
import Settings from "./Pages/Settings/settings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </>
  );
}

export default App;
