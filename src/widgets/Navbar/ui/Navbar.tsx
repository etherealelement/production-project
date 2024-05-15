import { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps): JSX.Element => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <ThemeSwitcher>TOGGLE</ThemeSwitcher>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О нас
        </AppLink>
      </div>
    </div>
  );
};
