import { BrowserRouter as Router } from "react-router-dom";
import BlogList from "./components/BlogList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>
      <Router>
        <BlogList />
      </Router>
    </div>
  );
}

export default App;
