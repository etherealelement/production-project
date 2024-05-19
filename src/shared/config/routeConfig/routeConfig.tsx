import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
};

export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
};
