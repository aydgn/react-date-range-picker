import styled from "styled-components";
const Calendar = () => {
  return (
    <CalendarContainer>
      {/* HEADER */}

      <div className="header">
        <div className="header-button">◀️</div>
        <span className="month">March</span>
        <div className="header-button">▶️</div>
      </div>

      {/* WEEKDAYS */}

      <div className="weekdays">
        <div className="weekday">Mon</div>
        <div className="weekday">Tue</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thu</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>
        <div className="weekday">Sun</div>
      </div>

      {/* DAYS */}

      <div className="days">
        <div className="day">1</div>
        <div className="day">2</div>
        <div className="day">3</div>
        <div className="day">4</div>
        <div className="day">5</div>
        <div className="day">6</div>
        <div className="day">7</div>
        <div className="day">8</div>
        <div className="day">9</div>
        <div className="day">10</div>
        <div className="day">11</div>
        <div className="day">12</div>
        <div className="day">13</div>
        <div className="day">14</div>
        <div className="day">15</div>
        <div className="day">16</div>
        <div className="day">17</div>
        <div className="day">18</div>
        <div className="day">19</div>
        <div className="day today">20</div>
        <div className="day">21</div>
        <div className="day">22</div>
        <div className="day">23</div>
        <div className="day">24</div>
        <div className="day">25</div>
        <div className="day">26</div>
        <div className="day">27</div>
        <div className="day">28</div>
        <div className="day">29</div>
        <div className="day">30</div>
        <div className="day">31</div>
      </div>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
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
    border-radius: 5px 5px 0 0;
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

  .days {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    user-select: none;

    .today {
      font-weight: bold;
      border: 1px solid #a5a5a5;
      background: #c5c5c5;
    }
  }

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
`;

export default Calendar;
