import AboutPage from "pages/AboutPage/ui/AboutPage";
import { MainPage } from "pages/MainPage";
import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element}></Route>
        ))}
      </Routes>
    </Suspense>
  );
};
