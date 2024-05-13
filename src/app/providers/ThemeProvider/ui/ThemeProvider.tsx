import { FC, useMemo, useState } from "react";
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from "../lib/ThemeContext";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
export const ThemeProvider: FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
