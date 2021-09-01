import { useState, useEffect } from "react"
import styled from "styled-components"

const Calendar2 = ({ hideCalendarFunc, today, setToday, handleDayClick }) => {
	const [calendar, setCalendar] = useState([])
	const startDay = today.clone().startOf("month").startOf("week").add(1, "day")
	const endDay = today.clone().endOf("month").endOf("week")
	const day = startDay.clone().subtract(1, "day")

	useEffect(() => {
		const a = []
		while (day.isBefore(endDay, "day")) {
			a.push(
				Array(7)
					.fill(0)
					.map(() => day.add(1, "day").clone())
			)
		}
		setCalendar(a)
	}, [today])

	const isSelected = day => {
		return today.isSame(day, "day")
	}
	const beforeToday = day => {
		return day.isBefore(new Date(), "day")
	}
	const isToday = day => {
		return day.isSame(new Date(), "day")
	}

	const nextMonth = () => {
		setToday(today.clone().add(1, "month"))
	}

	const prevMonth = () => {
		setToday(today.clone().subtract(1, "month"))
	}

	const dayStyles = day => {
		if (beforeToday(day)) return "day before"
		if (isToday(day)) return "day today"
		if (isSelected(day)) return "day selected"
		return "day"
	}

	// Render Calendar

	return (
		<CalendarContainer>
			<Close onClick={hideCalendarFunc}>&bull;&bull;&bull;</Close>
			<div className="header">
				<button onClick={() => prevMonth()} className="header-button">
					←
				</button>
				<span className="month">
					{today.format("MMMM")} {today.format("YYYY")}
				</span>
				<button onClick={() => nextMonth()} className="header-button">
					→
				</button>
			</div>
			<div className="weekdays">
				<div className="weekday">Mon</div>
				<div className="weekday">Tue</div>
				<div className="weekday">Wed</div>
				<div className="weekday">Thu</div>
				<div className="weekday">Fri</div>
				<div className="weekday">Sat</div>
				<div className="weekday">Sun</div>
			</div>
			{calendar.map((week, i) => (
				<Week key={i}>
					{week.map((day, i) => (
						<div className={dayStyles(day)} key={i} onClick={() => handleDayClick(day)}>
							{day.format("D")}
						</div>
					))}
				</Week>
			))}
		</CalendarContainer>
	)
}

const CalendarContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 400px;
	padding: 0 1rem;
	background-color: #f5f5f5;
	border-radius: 5px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

	.header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #c5c5c5;
		padding: 1rem;
		font-weight: bold;
	}

	.weekdays {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		padding: 0.5rem;
		border-bottom: 1px solid #c5c5c5;
		text-align: center;
	}
`

const Week = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 100%;

	.day {
		padding: 0.5rem;
		border: 1px solid transparent;

		:hover {
			border: 1px solid #a5a5a5;
			cursor: pointer;
		}

		:active {
			background: #c5c5c5;
		}
	}

	.today {
		border: 1px solid #c5c5c5;
		background-color: #a5a5a5;
	}

	.selected {
		background: #3db2ff;
	}

	.before {
		color: #ccc;
	}

	.selected {
		background-color: #4abdff;
		color: white;
	}

	.today {
		background-color: #ccc;
	}
`

const Close = styled.button`
	position: absolute;
	top: -1rem;
	right: 0;
	background: #c5c5c5;
	border: none;
	color: red;
	cursor: pointer;
`
export default Calendar2
