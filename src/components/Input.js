import styled from "styled-components";
import { useState } from "react";

function Input({ text }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <FieldSet>
      <legend>{text}</legend>
      <input
        type="text"
        name="date"
        maxLength="10"
        placeholder="--/--/----"
        value=""
      />
    </FieldSet>
  );
}

const FieldSet = styled.fieldset`
  background-color: #008ddf;
  border-radius: 4px;
  border: 1px solid #008ddf;
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
`;
export default Input;
