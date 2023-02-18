import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import StudentsPage from "../pages/Students";
import SinglePostPage from "../pages/SinglePostPage";
import { Route, Routes } from "react-router-dom";
import Pec from "../pages/Pec";


const RouterApp = () => {
  return (
    <Routes>
      <Route exact path="/posts/:id" element={<SinglePostPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route exact path="/students" element={<StudentsPage />}></Route>
      <Route exact path="/pec" element={<Pec />}></Route>
    </Routes>
  );
};

export default RouterApp;
