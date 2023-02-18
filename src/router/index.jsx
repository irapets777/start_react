import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import SinglePostPage from "../pages/SinglePostPage";
import { Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    <Routes>
      <Route exact path="/posts/:id" element={<SinglePostPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
    </Routes>
  );
};

export default RouterApp;
