import { useState, useEffect } from 'react'

const TimeView = () => {
    const [userName, setUserName] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const user = localStorage.getItem("name");
		setUserName(user);
	}, []);


    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
	const minutes = minute / 10 < 1 ? `0${minute}` : minute;

    const greeting = `Good ${
		(hour < 4 && "morning") ||
		(hour < 12 && "morning") ||
		(hour < 16 && "afternoon") ||
		(hour < 21 && "evening") ||
		"evening"
	}`;

    useEffect(() => {
		setInterval(() => {
			setCurrentDate(() => new Date());
		}, 1000);
	}, []);
    const showTime = `${hour}:${minutes}`;
  return (
    <>
        <div className="time-cont">
            {showTime}
        </div>
        <div className="greet-user-cont">
            {greeting}, {userName}
        </div>
    </>
  )
}

export default TimeView