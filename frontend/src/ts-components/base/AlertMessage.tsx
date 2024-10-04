import React from "react";

interface AlertMessageProps {
  classes?: string;
  message: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  classes = "",
  message,
}) => {
  return <div className={`p-4 rounded-lg ${classes}`}>{message}</div>;
};

export default AlertMessage;
