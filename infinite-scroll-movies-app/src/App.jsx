import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1 className="title">Movies</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
