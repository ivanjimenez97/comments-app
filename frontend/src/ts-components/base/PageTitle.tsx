import React from "react";

interface PageTitleProps {
  classes?: string;
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ classes = "", title }) => {
  return (
    <h2 className={`font-bold text-zinc-700 text-xl ${classes}`}>{title}</h2>
  );
};

export default PageTitle;
