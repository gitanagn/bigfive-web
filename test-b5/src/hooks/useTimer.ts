import { useState, useEffect } from 'react';

const useTimer = (shouldStop: boolean = false): number => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (shouldStop) return;

    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [shouldStop]);

  return counter;
};

export default useTimer;
