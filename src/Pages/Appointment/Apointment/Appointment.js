import React, { useState } from 'react';
import AppointmentBnner from '../AppintmentBanner/AppointmentBnner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
        const [selectDate,SetselectDate]=useState(new Date())

    return (
        <div>
         <AppointmentBnner 
         selectDate={selectDate}
         SetselectDate={SetselectDate}
          ></AppointmentBnner>
         <AvailableAppointments
         selectDate={selectDate}
         ></AvailableAppointments>
        </div>
    );
};

export default Appointment;