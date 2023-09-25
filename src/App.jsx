import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-task/:id" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
