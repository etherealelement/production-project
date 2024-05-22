import React, {FC} from 'react';
import './Loader.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div className={classNames("page-loader", {}, [])}>
      <span className="loader"></span>
    </div>
  );
};


