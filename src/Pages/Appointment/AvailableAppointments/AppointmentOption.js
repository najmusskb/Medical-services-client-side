import React from "react";

const AppointmentOption = ({ appointmentOption, SetTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center mt-10">
        <h2 className="text-2xl text-secondary font-blod text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try anouther day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "space"}
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => SetTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
