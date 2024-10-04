import React from "react";

interface DateProps {
  date: string | Date;
}

export const FormatLongDateTime: React.FC<DateProps> = ({ date }) => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return dateObj.toLocaleDateString("en-US", options);
};

export const ShortDateTimeFormat: React.FC<DateProps> = ({ date }) => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour12: true,
    minute: "2-digit",
    second: "2-digit",
  };
  return Intl.DateTimeFormat("en-US", options).format(dateObj);
};

export const FormatDateTimeValue = (date: string | Date) => {
  const currentDate = new Date(date);
  console.log("Current Date: ", currentDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  };
  return Intl.DateTimeFormat("en-US", options).format(currentDate);
};
