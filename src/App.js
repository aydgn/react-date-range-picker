import styled from "styled-components"
import { useState, useRef } from "react"
import moment from "moment"

// Components
import Header from "./components/Header"
import Input from "./components/Input"
import Calendar from "./components/Calendar"

function App() {
	const [showCalendar, setShowCalendar] = useState(false)
	const [today, setToday] = useState(moment())
	const inputRef = useRef()

	// Update input when a day is clicked
	const handleDayClick = day => {
		setToday(day)
		inputRef.current.value = day
		setShowCalendar(false)
	}

	// Show calendar when input is clicked
	const showCalendarFunc = () => {
		if (!showCalendar) {
			setShowCalendar(true)
		}
	}

	// Hide calendar when close () button is clicked
	const hideCalendarFunc = () => {
		if (showCalendar) {
			setShowCalendar(false)
		}
	}

	return (
		<AppContainer className="App">
			<Header />
			<Date>
				<Input text="Check-in" showCalendarFunc={showCalendarFunc} inputRef={inputRef} />
				<Input text="Check-out" showCalendarFunc={showCalendarFunc} inputRef={inputRef} />
			</Date>
			{showCalendar ? (
				<Calendar
					hideCalendarFunc={hideCalendarFunc}
					today={today}
					setToday={setToday}
					handleDayClick={handleDayClick}
				/>
			) : null}
		</AppContainer>
	)
}

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Date = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`

export default App
