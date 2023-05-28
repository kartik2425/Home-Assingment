import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchStudent from "./SearchStudent";
import NavBar from "./NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/searchStudent" element={<SearchStudent />} />
        {/* <Form /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
