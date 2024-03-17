import { useEffect, useState } from "react";
import "./CountDownTimer.css";

export default function CountDownTimer() {
  const [expiryTime, setExpiryTime] = useState<string | null>(
    "25 apr 2024 18:00:00"
  );
  const [countdownDays, setCountdownDays] = useState(0);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime!).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
      setCountdownSeconds(totalSeconds);
      setCountdownMinutes(totalMinutes);
      setCountdownHours(totalHours);
      setCountdownDays(totalDays);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(null);
        setCountdownSeconds(0);
        setCountdownMinutes(0);
        setCountdownHours(0);
        setCountdownDays(0);
      }
    }, 1000);
  };

  useEffect(() => {
    if (expiryTime) {
      countdownTimer();
    }
  });
  return (
    <div className="countdown_container">
      <div className="count_box">
        <h2>{`${("0" + countdownDays).toString().slice(-2)}`}</h2>
        <p>DAYS</p>
      </div>
      :
      <div className="count_box">
        <h2>{`${("0" + countdownHours).toString().slice(-2)}`}</h2>
        <p>HOURS</p>
      </div>
      :
      <div className="count_box">
        <h2>{`${("0" + countdownMinutes).toString().slice(-2)}`}</h2>
        <p>MINUTES</p>
      </div>
      :
      <div className="count_box">
        <h2>{`${("0" + countdownSeconds).toString().slice(-2)}`}</h2>
        <p>SECONDS</p>
      </div>
    </div>
  );
}
