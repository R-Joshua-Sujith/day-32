import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import VideoPlay from "./pages/VideoPlay";
import AddMoviePage from "./pages/AddMoviePage";
import MovieDatabase from "./components/MovieDatabase";
import EditMovie from "./components/EditMovie";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category/:id" element={<Movie />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/video/:category/:id" element={<VideoPlay />} />
        <Route path="/addbook" element={<AddMoviePage />} />
        <Route path="/book-database" element={<MovieDatabase />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
