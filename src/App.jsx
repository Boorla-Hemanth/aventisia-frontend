import { Routes, Route } from "react-router-dom";
import KnowledgeBase from "./Pages/Components/KnowledgeBase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<KnowledgeBase />} />
    </Routes>
  );
}

export default App;