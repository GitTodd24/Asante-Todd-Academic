import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"
import App from './App';
import Lectures from './pages/lectures'
import Ethics from './pages/ethics'
import Hermeneutics from './pages/hermeneutics'
import AfricanAmericanRelCul from './pages/africanamericanrelcul'

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <BrowserRouter>
    <App />
    <Link to="/lectures">Lectures</Link>
    </BrowserRouter>
);