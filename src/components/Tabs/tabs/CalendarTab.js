import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function CalendarTab() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date)
  }
  return (
    <div>
      <Calendar onChange={onChange} value={date} onClickDay={()=>console.log('hello')}/>
      <div className='cal-endLine'></div>
    </div>
  );
}

export default CalendarTab