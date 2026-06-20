import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Bets from './pages/Bets';
import Votes from './pages/Votes';
import Schedule from './pages/Schedule';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/votes" element={<Votes />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
