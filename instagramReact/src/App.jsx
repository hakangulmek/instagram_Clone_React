import Routers from "./Router/Router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {Routers.map((route, index) => (
          <Route key={index} path={route.path} element={route.Element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
