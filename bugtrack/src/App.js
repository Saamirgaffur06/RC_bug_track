// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proman from './components/Proman';
import User from './components/User';
import Tester from './components/Tester';
import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
function App() {
return (
<div className="App">
<Router>
<Routes>
<Route path="/proman" element={<Proman/>} />
<Route path="/user" element={<User/>} />
<Route path="/tester" element={<Tester/>} />
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/about" element={<About/>} />
</Routes>
</Router>
</div>
);
}
export default App
