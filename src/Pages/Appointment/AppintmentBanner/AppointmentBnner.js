import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";

const AppointmentBnner = ({ selectDate, SetselectDate }) => {
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="/"
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectDate}
              onSelect={SetselectDate}
            />
            {/* <p>You Have Selected date: {format(selectDate, "PP")}</p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBnner;
