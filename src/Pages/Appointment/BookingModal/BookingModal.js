import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, SetTreatment, selectDate }) => {
  const { name, slots } = treatment; //treatment is appointment options just like different name.
  const date = format(selectDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      name: name,
      email: email,
      slot: slot,
      phone: phone,
    };
    // send  data to the server and once data is saved the  close the modal and display toast

    console.log(booking);
    SetTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10 "
          >
            <input
              type="text"
              disabled
              value={date}
              className="input w-full onput-bordered"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full onput-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full onput-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full onput-bordered"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="w-full onput-bordered mx-w-xl btn-accent p-2 rounded"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default BookingModal;
