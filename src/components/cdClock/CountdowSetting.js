import React from 'react'
import DisplayTime from './DisplayTime'
function CountdowSetting({ days, hours, minutes, seconds }) {
  return (
    <div className="show-counter">
        <DisplayTime value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DisplayTime value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DisplayTime value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DisplayTime value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  )
}

export default CountdowSetting