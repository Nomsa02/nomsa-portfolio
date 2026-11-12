import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import App from './App'
import ProjectPage from './pages/ProjectPage'
import './styles.css'

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/projects/:number"
          element={<ProjectPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)