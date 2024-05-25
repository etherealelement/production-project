import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }): JSX.Element => {
  const { t } = useTranslation();

  return <div className={classNames(styles.NotFoundPage, {}, [])}>{t("Страница не найдена")}</div>;
};
