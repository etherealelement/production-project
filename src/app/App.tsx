import React, { Suspense } from "react";
import "./styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routing";
import { Navbar } from "widgets/Navbar";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </div>
  );
};

export default App;
