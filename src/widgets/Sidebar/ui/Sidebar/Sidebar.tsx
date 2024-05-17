import { FC, useState } from "react";
import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
interface SidebarProps {
  className?: string;
}
export const Sidebar: FC<SidebarProps> = ({ className }): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher>TOGGLE</ThemeSwitcher>
        <LangSwitcher className={styles.lang}></LangSwitcher>
      </div>
    </div>
  );
};
