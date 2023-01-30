import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";



function App() {
  return (
    <Routes>
      <Route element={<Main/>}>
        <Route path='/' element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
