import styled from "styled-components"

function Input({ text, showCalendarFunc, inputRef }) {
	return (
		<FieldSet>
			<legend>{text}</legend>
			<input
				type="text"
				maxLength="10"
				placeholder="--/--/----"
				autoCorrect="off"
				onFocus={showCalendarFunc}
				onClick={() => {
					showCalendarFunc()
				}}
				ref={inputRef}
			/>
		</FieldSet>
	)
}

const FieldSet = styled.fieldset`
	background-color: #008ddf;
	border-radius: 4px;
	border: 1px solid #008ddf;
	margin: 1rem 0.5rem;

	input {
		border: none;
		font-size: 21px;
		padding: 0.5rem;
		width: 120px;
		border-radius: 4px;
	}

	legend {
		background: #4abdff;
		color: #fff;
		padding: 3px 6px;
		border-radius: 4px;
	}
`
export default Input
