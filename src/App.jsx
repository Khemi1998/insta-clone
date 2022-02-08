import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cat from "./containers/Cat/Cat";
import Dog from "./containers/Dog/Dog";
import Rabbit from "./containers/Rabbit/Rabbit";
import Error from "./containers/Error/Error";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Error />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/rabbit" element={<Rabbit />} />
      </Routes>
    </Router>
  );
}

export default App;
