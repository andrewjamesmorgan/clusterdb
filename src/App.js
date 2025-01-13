import './css/App.css';
import { useState, createContext } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

export const UserContext = createContext(null);

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <UserContext.Provider 
          value={
            { language: language, setLanguage: setLanguage }
        }>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
