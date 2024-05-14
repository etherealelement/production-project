import React, { Suspense } from "react";
import "./styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routing";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <AppRouter></AppRouter>
    </div>
  );
};

export default App;
