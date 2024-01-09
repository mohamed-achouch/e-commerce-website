import React, { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
const contDown =()=>{
    const destination = new Date("February 10,2023").getTime();
    let interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 *24));
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
      const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60 ));
      const seconds = Math.floor(different % (1000 * 60) / 1000);
     if(destination < 0) clearInterval(interval.current)
     else{
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
     }
  });
}
  

  useEffect(() => {
    contDown();
  });

  return (
    <div className="clock__wrapper d-flex align-items-center gap-5">
      <div className="clock__data d-flex align-items-center gap-3">
        <div>
          <h1 className="text-white fs-3">{days}</h1>
          <h1 className="text-white fs-6">days</h1>
        </div>
        <span className="text-white fs-1">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div>
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h1 className="text-white fs-6">Hours</h1>
        </div>
        <span className="text-white fs-1">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div>
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h1 className="text-white fs-6">Minutes</h1>
        </div>
        <span className="text-white fs-1">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div>
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h1 className="text-white fs-6">Seconds</h1>
        </div>
      </div>
    </div>
  );
};

export default Clock;
