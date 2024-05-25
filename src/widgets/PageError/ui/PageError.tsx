import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./PageError.module.scss";
import {Button} from "shared/ui/Button";


interface PageErrorProps {
   className?: string;
}

export const PageError: FC<PageErrorProps> = ({className}) => {
  const {t} = useTranslation();

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(styles.ErrorPage, {}, [className])}>
      <p>{t("Ошибка")}</p>
      <Button onClick={reloadPage}>
        {t("Обновить страницу")}
      </Button>
    </div>
  );
};
