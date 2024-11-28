import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import New from "./Pages/New/New";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/single" element={<Single/>} />
        <Route path="/new" element={<New/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
