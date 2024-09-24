
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/Store";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Flights = React.lazy(() => import("./pages/Flights"));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/flights" element={<Flights />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
