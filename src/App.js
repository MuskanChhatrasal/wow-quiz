import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import FinalScore from "./Pages/FinalScore/FinalScore";
import Home from "./Pages/Home/home";
import Questions from "./Pages/Questions/Questions";
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
        <Route path="/questions" element={<Questions />} />
        <Route path="/finalScore" element={<FinalScore />} />
      </Routes>
    </>
  );
}

export default App;
