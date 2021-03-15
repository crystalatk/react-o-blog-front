import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import BlogList from "./components/BlogList";
import AddNewBlog from "./components/AddNewBlog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <h1>My Blog</h1>
        </header>
        <AddNewBlog />
        <Router>
          <BlogList />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
