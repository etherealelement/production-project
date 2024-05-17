import { FC } from "react";
import i18n from "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "../../Button/Button";
import { useTranslation } from "react-i18next";
interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames(styles.LangSwitcher, {}, [className])}>
      {t("Язык")}
    </Button>
  );
};
