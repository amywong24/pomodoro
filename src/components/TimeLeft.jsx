import React, {useState} from "react";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

const TimeLeft = ({sessionLength}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
    return (
        <div>{formatTimeLeft}</div>
    )
}

export default TimeLeft;