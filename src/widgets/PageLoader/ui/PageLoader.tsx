import {FC} from "react";
import "./PageLoader.scss";
import {classNames} from "shared/lib/classNames/classNames";

interface PageLoaderProps {
  className?: string;
};

export const PageLoader: FC<PageLoaderProps> = () => {
  return (
    <div className={classNames("page-loader", {}, [])}>
      <span className="loader"></span>
    </div>
  );
};
