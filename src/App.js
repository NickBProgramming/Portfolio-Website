import logo from "./logo.svg";
import "./App.css";
import { Main } from "./Pages/main";
import { Routes, Route } from "react-router-dom";
import { Resume } from "./Pages/resume";
import { NotFound } from "./Pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
