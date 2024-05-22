import {FC} from "react";
import styles from "./PageLoader.scss";
import {classNames} from "shared/lib/classNames/classNames";

interface PageLoaderProps {
  className?: string;
};

export const PageLoader: FC<PageLoaderProps> = () => {
  return (
    <div className={classNames(styles.pageLoader, {}, [])}>

    </div>
  );
};
