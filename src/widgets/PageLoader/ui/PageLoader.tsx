import { FC } from "react";
import { Loader } from "shared/ui/Loader";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = () => {
  return (
    <div className={classNames(styles.PageLoader, {}, [])}>
      <Loader></Loader>
    </div>
  );
};
