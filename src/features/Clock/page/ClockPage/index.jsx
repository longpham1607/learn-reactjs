import React, { useEffect, useState } from "react";

const formatDate = (date) => {
  if (!date) return "";
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
};

function ClockPage(props) {
  const [timeOut, setTimeOut] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeOut(newTimeString);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return <div>{timeOut}</div>;
}

export default ClockPage;
