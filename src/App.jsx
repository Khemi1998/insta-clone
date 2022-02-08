import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav/Nav';

function App() {
//   <Router>
//   <Nav />
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/greetings" element={<GreetingList greetings={greetings} />} />
//     <Route path="/new-greeting" element={<Form />} />
//   </Routes>
// </Router>

  return (
    <Nav />
  )
}

export default App;
