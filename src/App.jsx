import logo from './logo.svg';
import './App.scss';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { LandingPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* TODO add Not Found */}
      </Routes>
    </div>
  )
}

export default App;
