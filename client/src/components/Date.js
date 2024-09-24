import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Date({inputType, onValueChange}) {
    const [startDate, setStartDate] = useState(null);
    const [open, setOpen] = useState(false);

    const handleChangeDate= (d) => {
        setStartDate(d);
        onValueChange(moment(d).format("YYYY-MM-DD"));
    }

  return (
    <div className='select-container w-100'>
        <FontAwesomeIcon icon={faCalendar} className="purple font-size-12 input-icon" />
    <DatePicker 
    className={inputType}
    selected={startDate} 
    onChange={(date) => handleChangeDate(date)} 
    dateFormat="yyyy/MM/dd"
    />
    </div>

  )
}
