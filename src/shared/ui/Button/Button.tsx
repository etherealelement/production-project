import { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({ children, className, theme, ...otherProps }): JSX.Element => {
  return (
    <button className={classNames(styles.button, { [styles[theme]]: true }, [className])} {...otherProps}>
      {children}
    </button>
  );
};
