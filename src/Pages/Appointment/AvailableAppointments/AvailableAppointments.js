import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";
const AvailableAppointments = ({ selectDate }) => {
  const [treatment, SetTreatment] = useState(null);
  const date = format(selectDate, "PP");
  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <section className="my-16">
      <p className="text-center text-primary text-secondary font-blod">
        Available Appointments on {format(selectDate, "PP")}
      </p>

      <div className="grid gap-6 grid-cols-1 md-grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            SetTreatment={SetTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectDate={selectDate}
          treatment={treatment}
          SetTreatment={SetTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
