import React from 'react'
import {useCountdown} from '../../customHooks/useCountdown'
import Expired from './Expired';
import CountdowSetting from './CountdowSetting';
function CdTimer({ targetDate }) {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    if (days + hours + minutes + seconds <= 0) {
    return <Expired />;
  } else {
    return (
      <CountdowSetting
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}

export default CdTimer